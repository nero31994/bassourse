async function checkChannelStatus() {
  const listItems = document.querySelectorAll('#channelList li');

  for (let i = 0; i < channels.length; i++) {
    const channel = channels[i];

    try {
      const response = await fetch(channel.url, { method: 'HEAD' });
      channel.isOnline = response.ok;
    } catch {
      channel.isOnline = false;
    }

    const statusDot = listItems[i]?.querySelector('.status-dot');
    if (statusDot) {
      statusDot.classList.remove('status-online', 'status-offline');
      statusDot.classList.add(channel.isOnline ? 'status-online' : 'status-offline');
    }
  }
}

function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}

function populateCategoryDropdown() {
  const dropdown = document.getElementById('categoryFilter');
  const categories = [...new Set(channels.map(ch => ch.category))].sort();

  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    dropdown.appendChild(option);
  });
}

function setupChannelList() {
  const list = document.getElementById('channelList');
  const countDisplay = document.getElementById('channelCount');
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const selectedCategory = document.getElementById('categoryFilter').value;

  list.innerHTML = '';
  let totalCount = 0;

  channels.forEach((channel, index) => {
    const matchesCategory = selectedCategory === 'all' || channel.category === selectedCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchValue);

    if (matchesCategory && matchesSearch) {
      totalCount++;

      const listItem = document.createElement('li');
      listItem.tabIndex = 0;
      listItem.onclick = () => loadChannel(index);

      if (index === activeIndex) {
        listItem.classList.add('active');
      }

      listItem.textContent = channel.name + ' ';
      
      const statusDot = document.createElement('span');
      statusDot.className = 'status-dot ' + (channel.isOnline ? 'status-online' : 'status-offline');

      listItem.appendChild(statusDot);
      list.appendChild(listItem);
    }
  });

  countDisplay.textContent = `Total Channel${totalCount !== 1 ? 's' : ''}: ${totalCount}`;
}

function initPlayer() {
  jwPlayerInstance = jwplayer('player').setup({
    width: '100%',
    height: '100%',
    autostart: false,
    stretching: 'exactfit',
    aspectratio: '16:9',
    primary: 'html5',
    hlshtml: true,
    displaytitle: false,
    logo: { hide: true },
  });

  jwPlayerInstance.on('error', showFallbackMessage);
  jwPlayerInstance.on('play', hideFallbackMessage);
}

function loadChannel(index) {
  if (activeIndex === index) return;

  activeIndex = index;
  setupChannelList();

  const channel = channels[index];
  const config = {
    file: channel.url,
    title: channel.name,
    autostart: true,
  };

  if (channel.type === 'mpd' && channel.drm) {
    config.drm = channel.drm;
  }

  hideFallbackMessage();
  jwPlayerInstance.setup(config);
}

function showFallbackMessage() {
  document.getElementById('fallbackMessage').style.display = 'block';
}

function hideFallbackMessage() {
  document.getElementById('fallbackMessage').style.display = 'none';
}

// Initialize everything on page load
window.addEventListener('load', () => {
  initPlayer();
  populateCategoryDropdown();
  setupChannelList();
  checkChannelStatus();
  updateClock();
  setInterval(updateClock, 1000);
});

// Cleanup player on page unload
window.addEventListener('beforeunload', () => {
  jwPlayerInstance?.remove();
});

// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Prevent developer tools shortcuts
function ctrlShiftKey(e, key) {
  return e.ctrlKey && e.shiftKey && e.keyCode === key.charCodeAt(0);
}

document.onkeydown = e => {
  if (
    e.keyCode === 123 || // F12
    ctrlShiftKey(e, 'I') || // Ctrl+Shift+I
    ctrlShiftKey(e, 'J') || // Ctrl+Shift+J
    ctrlShiftKey(e, 'C') || // Ctrl+Shift+C
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // Ctrl+U
  ) {
    return false;
  }
};

document.body.classList.toggle('dark-theme');
document.body.classList.toggle('light-theme');

const switcher = document.getElementById('themeSwitch');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
  switcher.checked = true;
} else {
  document.body.classList.add('dark-theme');
}

switcher.addEventListener('change', () => {
  if (switcher.checked) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
});
