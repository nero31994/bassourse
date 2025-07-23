let jwPlayerInstance = null,
  activeIndex = -1
const channels = [
    {
        name: 'JUNGO TV PINOY',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8',
    },
    {
        name: 'SCREAMFLIX',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/screamflix/stream.m3u8',
    },
    {
        name: 'FRONT ROW CHANNEL',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/frontrow/stream.m3u8',
    },
    {
        name: 'HALLYPOP',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8',
    },
    {
        name: 'AWSN',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://amg02188-amg02188c2-jungotv-northamerica-5717.playouts.now.amagi.tv/playlist1080p.m3u8',
    },
    {
        name: 'COMBAT GO',
        category: 'JungoTV',
        type: 'hls',
        url: 'https://jungotvstream.chanall.tv/jungotv/combatgo/stream.m3u8',
    },
    {
        name: 'ANC',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d3cjss68xc4sia.cloudfront.net/out/v1/89ea8db23cb24a91bfa5d0795f8d759e/index.mpd',
        drm:
        {
            clearkey: {keyId: '4bbdc78024a54662854b412d01fafa16',key: '6039ec9b213aca913821677a28bd78ae',},
        },
    },
    {
        name: 'CINEMA ONE',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd',
        drm:
        {
            clearkey: {keyId: '58d0e56991194043b8fb82feb4db7276',key: 'd68f41b59649676788889e19fb10d22c',},
        },
    },
    {
        name: 'CINE MO!',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd',
        drm:
        {
            clearkey: {keyId: 'aa8aebe35ccc4541b7ce6292efcb1bfb',key: 'aab1df109d22fc5d7e3ec121ddf24e5f',},
        },
    },
    {
        name: 'GMA PINOY TV',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono-dzsx9.amagi.tv/index.mpd',
        drm:
        {
            clearkey: {keyId: 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1',key: '47635b8e885e19f2ccbdff078c207058',},
        },
    },
    {
        name: 'KAPAMILYA CHANNEL',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d1uf7s78uqso1e.cloudfront.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd',
        drm:
        {
            clearkey: {keyId: 'bd17afb5dc9648a39be79ee3634dd4b8',key: '3ecf305d54a7729299b93a3d69c02ea5',},
        },
    },
    {
        name: 'MYX',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d24xfhmhdb6r0q.cloudfront.net/out/v1/e897a7b6414a46019818ee9f2c081c4f/index.mpd',
        drm:
        {
            clearkey: {keyId: 'f40a52a3ac9b4702bdd5b735d910fd2f',key: '5ce1bc7f06b494c276252b4d13c90e51',},
        },
    },
    {
        name: 'TELERADYO SERBISYO',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d14c00opfjb50c.cloudfront.net/out/v1/0fa4eb67579d41cca4ed146c93aa855f/index.mpd',
        drm:
        {
            clearkey: {keyId: '47c093e0c9fd4f80839a0337da3dd876',key: '50547394045b3d047dc7d92f57b5fb33',},
        },
    },
    {
        name: 'TFC ASIA',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://d1facupi3cod3q.cloudfront.net/out/v1/e3633f8591e248b0af1af15a474bfa4a/index.mpd',
        drm:
        {
            clearkey: {keyId: '9568cc84e1d944f38eac304517eab6fd',key: 'f12142af8f39b3bab79d3679d3665ebe',},
        },
    },
    {
        name: 'TFC NORTH AMERICA',
        category: 'iWantTFC',
        type: 'mpd',
        url: 'https://du44jtt5g7upx.cloudfront.net/out/v1/a3b708325c1d43dc9549c262526a6945/index.mpd',
        drm:
        {
            clearkey: {keyId: '9c700e42ffc64d9b82d94cf57a2302fa',key: '44d038e1fdcaefb3e75ffb4e42537279',},
        },
    },
    {
        name: 'PPV: Manny Pacquiao vs. Mario Barrios',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/cg_ppv_main_hd.mpd',
        drm:
        {
            clearkey: {keyId: '549ab7cd35a64bb6bb479ecead04d69d',key: '829799ed534d11fcadeb4b192467e050',},
        },
    },
    {
        name: 'A2Z',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
        drm:
        {
            clearkey: {keyId: 'f703e4c8ec9041eeb5028ab4248fa094',key: 'c22f2162e176eee6273a5d0b68d19530',},
        },
    },
    {
        name: 'ABC AUSTRALIA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        drm:
        {
            clearkey: {keyId: '389497f9f8584a57b234e27e430e04b7',key: '3b85594c7f88604adf004e45c03511c0',},
        },
    },
    {
        name: 'AL JAZEERA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd',
        drm:
        {
            clearkey: {keyId: '7f3d900a04d84492b31fe9f79ac614e3',key: 'd33ff14f50beac42969385583294b8f2',},
        },
    },
    {
        name: 'ANIMAL PLANET',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
        drm:
        {
            clearkey: {keyId: '436b69f987924fcbbc06d40a69c2799a',key: 'c63d5b0d7e52335b61aeba4f6537d54d',},
        },
    },
    {
        name: 'ARIRANG KOREA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
        drm:
        {
            clearkey: {keyId: '13815d0fa026441ea7662b0c9de00bcf',key: '2d99a55743677c3879a068dd9c92f824',},
        },
    },
    {
        name: 'ASIAN FOOD NETWORK',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        drm:
        {
            clearkey: {keyId: '1619db30b9ed42019abb760a0a3b5e7f',key: '5921e47fb290ae263291b851c0b4b6e4',},
        },
    },
    {
        name: 'AXN',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
        drm:
        {
            clearkey: {keyId: 'fd5d928f5d974ca4983f6e9295dfe410',key: '3aaa001ddc142fedbb9d5557be43792f',},
        },
    },
    {
        name: 'BBC EARTH',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        drm:
        {
            clearkey: {keyId: '34ce95b60c424e169619816c5181aded',key: '0e2a2117d705613542618f58bf26fc8e',},
        },
    },
    {
        name: 'BBC LIFESTYLE',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd',
        drm:
        {
            clearkey: {keyId: '34880f56627c11ee8c990242ac120002',key: 'c23677c829bb244b79a3dc09ffd88ca0',},
        },
    },
    {
        name: 'BBC NEWS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
        drm:
        {
            clearkey: {keyId: 'f59650be475e4c34a844d4e2062f71f3',key: '119639e849ddee96c4cec2f2b6b09b40',},
        },
    },
    {
        name: 'BILYONARYO NEWS CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
        drm:
        {
            clearkey: {keyId: '227ffaf09bec4a889e0e0988704d52a2',key: 'b2d0dce5c486891997c1c92ddaca2cd2',},
        },
    },
    {
        name: 'BLOOMBERG',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
        drm:
        {
            clearkey: {keyId: 'ef7d9dcfb99b406cb79fb9f675cba426',key: 'b24094f6ca136af25600e44df5987af4',},
        },
    },
    {
        name: 'BUKO CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
        drm:
        {
            clearkey: {keyId: 'd273c085f2ab4a248e7bfc375229007d',key: '7932354c3a84f7fc1b80efa6bcea0615',},
        },
    },
    {
        name: 'CARTOON NETWORK',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
        drm:
        {
            clearkey: {keyId: 'a2d1f552ff9541558b3296b5a932136b',key: 'cdd48fa884dc0c3a3f85aeebca13d444',},
        },
    },
    {
        name: 'CCTV 4',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        drm:
        {
            clearkey: {keyId: 'b83566836c0d4216b7107bd7b8399366',key: '32d50635bfd05fbf8189a0e3f6c8db09',},
        },
    },
    {
        name: 'CELESTIAL MOVIES PINOY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/celmovie_pinoy_sd.mpd',
        drm:
        {
            clearkey: {keyId: '0f8537d8412b11edb8780242ac120002',key: '2ffd7230416150fd5196fd7ea71c36f3',},
        },
    },
    {
        name: 'CGTN',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cgtneng.mpd',
        drm:
        {clearkey: {keyId: '2782770c21354914922efa9dbc82b513',key: 'cc65d298482da51046b0c0656f3f5f15',},
        },
    },
    {
        name: 'CINEMAX',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
        drm:
        {
            clearkey: {keyId: 'b207c44332844523a3a3b0469e5652d7',key: 'fe71aea346db08f8c6fbf0592209f955',},
        },
    },
    {
        name: 'CNA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
        drm:
        {
            clearkey: {keyId: 'b259df9987364dd3b778aa5d42cb9acd',key: '753e3dba96ab467e468269e7e33fb813',},
        },
    },
    {
        name: 'CRIME+INVESTIGATION',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd',
        drm:
        {
            clearkey: {keyId: '21e2843b561c4248b8ea487986a16d33',key: 'db6bb638ccdfc1ad1a3e98d728486801',},
        },
    },
    {
        name: 'DEPED TV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
        drm:
        {
            clearkey: {keyId: '0f853706412b11edb8780242ac120002',key: '2157d6529d80a760f60a8b5350dbc4df',},
        },
    },
    {
        name: 'DISCOVERY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd',
        drm:
        {
            clearkey: {keyId: 'd9ac48f5131641a789328257e778ad3a',key: 'b6e67c37239901980c6e37e0607ceee6',},
        },
    },
    {
        name: 'DREAMWORKS CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        drm:
        {
            clearkey: {keyId: '4ab9645a2a0a47edbd65e8479c2b9669',key: '8cb209f1828431ce9b50b593d1f44079',},
        },
    },
    {
        name: 'DREAMWORKS (TAGALIZED)',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
        drm:
        {
            clearkey: {keyId: '564b3b1c781043c19242c66e348699c5',key: 'd3ad27d7fe1f14fb1a2cd5688549fbab',},
        },
    },
    {
        name: 'FASHION TV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        drm:
        {
            clearkey: {keyId: '971ebbe2d887476398e97c37e0c5c591',key: '472aa631b1e671070a4bf198f43da0c7',},
        },
    },
    {
        name: 'FOOD NETWORK',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        drm:
        {
            clearkey: {keyId: 'b7299ea0af8945479cd2f287ee7d530e',key: 'b8ae7679cf18e7261303313b18ba7a14',},
        },
    },
    {
        name: 'FRANCE 24',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd',
        drm:
        {
            clearkey: {keyId: '257f9fdeb39d41bdb226c2ae1fbdaeb6',key: 'e80ead0f4f9d6038ab34f332713ceaa5',},
        },
    },
    {
        name: 'GLOBAL TREKKER',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd',
        drm:
        {
            clearkey: {keyId: '4553f7e8011f411fb625cefc39274300',key: '98f2f1d153367e84b5d559dc9dfb9a35',},
        },
    },
    {
        name: 'HBO',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
        drm:
        {
            clearkey: {keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',key: '54c213b2b5f885f1e0290ee4131d425b',},
        },
    },
    {
        name: 'HBO FAMILY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
        drm:
        {
            clearkey: {keyId: '872910c843294319800d85f9a0940607',key: 'f79fd895b79c590708cf5e8b5c6263be',},
        },
    },
    {
        name: 'HBO HITS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
        drm:
        {
            clearkey: {keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',key: 'a8795f3bdb8a4778b7e888ee484cc7a1',},
        },
    },
    {
        name: 'HBO SIGNATURE',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
        drm:
        {
            clearkey: {keyId: 'a06ca6c275744151895762e0346380f5',key: '559da1b63eec77b5a942018f14d3f56f',},
        },
    },
    {
        name: 'HGTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
        drm:
        {
            clearkey: {keyId: 'f0e3ab943318471abc8b47027f384f5a',key: '13802a79b19cc3485d2257165a7ef62a',},
        },
    },
    {
        name: 'HISTORY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        drm:
        {
            clearkey: {keyId: 'a7724b7ca2604c33bb2e963a0319968a',key: '6f97e3e2eb2bade626e0281ec01d3675',},
        },
    },
    {
        name: 'HITS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
        drm:
        {
            clearkey: {keyId: 'dac605bc197e442c93f4f08595a95100',key: '975e27ffc1b7949721ee3ccb4b7fd3e5',},
        },
    },
    {
        name: 'HITS MOVIES',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd',
        drm:
        {
            clearkey: {keyId: 'f56b57b32d7e4b2cb21748c0b56761a7',key: '3df06a89aa01b32655a77d93e09e266f',},
        },
    },
    {
        name: 'HITS NOW',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
        drm:
        {
            clearkey: {keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',key: '92b0287c7042f271b266cc11ab7541f1',},
        },
    },
    {
        name: 'IBC 13',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd',
        drm:
        {
            clearkey: {keyId: '04e292bc99bd4ccba89e778651914254',key: 'ff0a62bdf8920ce453fe680330b563a5',},
        },
    },
    {
        name: 'KBS WORLD',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd',
        drm:
        {
            clearkey: {keyId: '22ff2347107e4871aa423bea9c2bd363',key: 'c6e7ba2f48b3a3b8269e8bc360e60404',},
        },
    },
    {
        name: 'KIX',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        drm:
        {
            clearkey: {keyId: 'a8d5712967cd495ca80fdc425bc61d6b',key: 'f248c29525ed4c40cc39baeee9634735',},
        },
    },
    {
        name: 'KNOWLEDGE CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
        drm:
        {
            clearkey: {keyId: '0f856fa0412b11edb8780242ac120002',key: '783374273ef97ad3bc992c1d63e091e7',},
        },
    },
    {
        name: 'LIFETIME',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
        drm:
        {
            clearkey: {keyId: 'cf861d26e7834166807c324d57df5119',key: '64a81e30f6e5b7547e3516bbf8c647d0',},
        },
    },
    {
        name: 'LOTUS MACAU',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
        drm:
        {
            clearkey: {keyId: '60dc692e64ea443a8fb5ac186c865a9b',key: '01bdbe22d59b2a4504b53adc2f606cc1',},
        },
    },
    {
        name: 'MOONBUG KIDS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd',
        drm:
        {
            clearkey: {keyId: '0bf00921bec94a65a124fba1ef52b1cd',key: '0f1488487cbe05e2badc3db53ae0f29f',},
        },
    },
    {
        name: 'MPTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
        drm:
        {
            clearkey: {keyId: '6aab8f40536f4ea98e7c97b8f3aa7d4e',key: '139aa5a55ade471faaddacc4f4de8807',},
        },
    },
    {
        name: 'NBA TV PHILIPPINES',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd',
        drm:
        {
            clearkey: {keyId: 'c5e51f41ceac48709d0bdcd9c13a4d88',key: '20b91609967e472c27040716ef6a8b9a',},
        },
    },
    {
        name: 'NBA TV PHILIPPINES (PL)',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd',
        drm:
        {
            clearkey: {keyId: 'f36eed9e95f140fabbc88a08abbeafff',key: '0125600d0eb13359c28bdab4a2ebe75a',},
        },
    },
    {
        name: 'NHK WORLD JAPAN',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd',
        drm:
        {
            clearkey: {keyId: '3d6e9d4de7d7449aadd846b7a684e564',key: '0800fff80980f47f7ac6bc60b361b0cf',},
        },
    },
    {
        name: 'NICK JR.',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
        drm:
        {
            clearkey: {keyId: 'bab5c11178b646749fbae87962bf5113',key: '0ac679aad3b9d619ac39ad634ec76bc8',},
        },
    },
    {
        name: 'NICKELODEON',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        drm:
        {
            clearkey: {keyId: '9ce58f37576b416381b6514a809bfd8b',key: 'f0fbb758cdeeaddfa3eae538856b4d72',},
        },
    },
    {
        name: 'ONE NEWS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
        drm:
        {
            clearkey: {keyId: 'd39eb201ae494a0b98583df4d110e8dd',key: '6797066880d344422abd3f5eda41f45f',},
        },
    },
    {
        name: 'ONE PH',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
        drm:
        {
            clearkey: {keyId: '92834ab4a7e1499b90886c5d49220e46',key: 'a7108d9a6cfcc1b7939eb111daf09ab3',},
        },
    },
    {
        name: 'ONE SPORTS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
        drm:
        {
            clearkey: {keyId: '53c3bf2eba574f639aa21f2d4409ff11',key: '3de28411cf08a64ea935b9578f6d0edd',},
        },
    },
    {
        name: 'ONE SPORTS+',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        drm:
        {
            clearkey: {keyId: '322d06e9326f4753a7ec0908030c13d8',key: '1e3e0ca32d421fbfec86feced0efefda',},
        },
    },
    {
        name: 'PBA RUSH',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        drm:
        {
            clearkey: {keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',key: '95b2f2ffd4e14073620506213b62ac82',},
        },
    },
    {
        name: 'PBO',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
        drm:
        {
            clearkey: {keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',key: '31e752b441bd2972f2b98a4b1bc1c7a1',},
        },
    },
    {
        name: 'PL SDI 1',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi1.mpd',
        drm:
        {
            clearkey: {keyId: 'a913faeecaac4813a55240bea0c68858',key: '05b7d7eaba8d6410dbe234336d9b235a',},
        },
    },
    {
        name: 'PL SDI 2',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_sdi2.mpd',
        drm:
        {
            clearkey: {keyId: '2f3056cac18d4e31a59de39767042b03',key: '83728946b898141ae411572f9f5fce0d',},
        },
    },
    {
        name: 'PL SDI 3',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/pl_sdi3.mpd',
        drm:
        {
            clearkey: {keyId: '0c16d5962a22494db502b3453f891208',key: 'acaed175b981b34ae9b5cb0130506854',},
        },
    },
    {
        name: 'PL SDI 4',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/pl_sdi4.mpd',
        drm:
        {
            clearkey: {keyId: 'c3050cba95c945418efa3aedbc69cff7',key: '988e7fade0828273472e24545d0cfa4c',},
        },
    },
    {
        name: 'PL SDI 5',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi5.mpd',
        drm:
        {
            clearkey: {keyId: 'eecc6d7ac3df439fb2b73fb38007cb82',key: '826c341a6fef4518cefd27ec85e8b274',},
        },
    },
    {
        name: 'PL SDI 6',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/pl_sdi6.mpd',
        drm:
        {
            clearkey: {keyId: '02d5f086706e407e9343c040ac7fb5b8',key: '9d7e088bf7fffc9297ab3a02f0ce9a72',},
        },
    },
    {
        name: 'PL SDI 7',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pl_sdi7.mpd',
        drm:
        {
            clearkey: {keyId: '40bed7f7948e4e5792982cf5b7ee4d78',key: '1fbfd2e3be51aae857f2f24306e5fc41',},
        },
    },
    {
        name: 'PL SDI 8',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/pl_sdi8.mpd',
        drm:
        {
            clearkey: {keyId: '5a8dbf3b9c2c43079a40fb5d0068f9ef',key: '1778ac6e22527ee2efd6886d8d509c2d',},
        },
    },
    {
        name: 'PL SDI 9',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/pl_sdi9.mpd',
        drm:
        {
            clearkey: {keyId: '1c7b9a2af9ad4076b155f06269b6adc2',key: 'ed6a8b11738cd27c0bee2d9e3fee178a',},
        },
    },
    {
        name: 'PL SDI 10',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/pl_sdi10.mpd',
        drm:
        {
            clearkey: {keyId: '63055a8904644407a64a57874703f71e',key: '0fd611777d37a7ff8afce19d9cee2e91',},
        },
    },
    {
        name: 'SMART SDI 7',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/smart_sdi7.mpd',
        drm:
        {
            clearkey: {keyId: '0f873c2c412b11edb8780242ac120002',key: '9c1f27adc2a2dd23ce415e8563c07af6',},
        },
    },
    {
        name: 'SMART SDI 8',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/smart_sdi8.mpd',
        drm:
        {
            clearkey: {keyId: '50ea84d79773464192071d6fc058cba1',key: '0b1642e0a661a780e74835fe765e1319',},
        },
    },
    {
        name: 'SMART SDI 9',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/smart_sdi9.mpd',
        drm:
        {
            clearkey: {keyId: 'd2a24c65b3734565af71a1c3a9bbbf69',key: '552351880bd0eb97f85c8aeccd88ffa5',},
        },
    },
    {
        name: 'PPV SD 197',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/ppvsd197.mpd',
        drm:
        {
            clearkey: {keyId: '8ad18258a9814d60a67efc6ec9fb3cbd',key: '7ce6edd4bcf1510583c7739ac8f08e79',},
        },
    },
    {
        name: 'PTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
        drm:
        {
            clearkey: {keyId: '71a130a851b9484bb47141c8966fb4a3',key: 'ad1f003b4f0b31b75ea4593844435600',},
        },
    },
    {
        name: 'ROCK ACTION',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
        drm:
        {
            clearkey: {keyId: '0f852fb8412b11edb8780242ac120002',key: '4cbc004d8c444f9f996db42059ce8178',},
        },
    },
    {
        name: 'ROCK ENTERTAINMENT',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
        drm:
        {
            clearkey: {keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7',key: 'be2a096403346bc1d0bb0f812822bb62',},
        },
    },
    {
        name: 'RPTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
        drm:
        {
            clearkey: {keyId: '1917f4caf2364e6d9b1507326a85ead6',key: 'a1340a251a5aa63a9b0ea5d9d7f67595',},
        },
    },
    {
        name: 'SARI-SARI',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
        drm:
        {
            clearkey: {keyId: '0a7ab3612f434335aa6e895016d8cd2d',key: 'b21654621230ae21714a5cab52daeb9d',},
        },
    },
    {
        name: 'SPOTV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        drm:
        {
            clearkey: {keyId: 'ec7ee27d83764e4b845c48cca31c8eef',key: '9c0e4191203fccb0fde34ee29999129e',},
        },
    },
    {
        name: 'SPOTV 2',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        drm:
        {
            clearkey: {keyId: '7eea72d6075245a99ee3255603d58853',key: '6848ef60575579bf4d415db1032153ed',},
        },
    },
    {
        name: 'TAP ACTION FLIX',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        drm:
        {
            clearkey: {keyId: 'bee1066160c0424696d9bf99ca0645e3',key: 'f5b72bf3b89b9848de5616f37de040b7',},
        },
    },
    {
        name: 'TAP MOVIES',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd',
        drm:
        {
            clearkey: {keyId: '71cbdf02b595468bb77398222e1ade09',key: 'c3f2aa420b8908ab8761571c01899460',},
        },
    },
    {
        name: 'TAP SPORTS',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        drm:
        {
            clearkey: {keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',key: '0e7e35a07e2c12822316c0dc4873903f',},
        },
    },
    {
        name: 'TAP TV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        drm:
        {
            clearkey: {keyId: 'f6804251e90b4966889b7df94fdc621e',key: '55c3c014f2bd12d6bd62349658f24566',},
        },
    },
    {
        name: 'THRILL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
        drm:
        {
            clearkey: {keyId: '928114ffb2394d14b5585258f70ed183',key: 'a82edc340bc73447bac16cdfed0a4c62',},
        },
    },
    {
        name: 'TMC',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
        drm:
        {
            clearkey: {keyId: '96701d297d1241e492d41c397631d857',key: 'ca2931211c1a261f082a3a2c4fd9f91b',},
        },
    },
    {
        name: 'TRAVEL CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        drm:
        {
            clearkey: {keyId: 'f3047fc13d454dacb6db4207ee79d3d3',key: 'bdbd38748f51fc26932e96c9a2020839',},
        },
    },
    {
        name: 'TRUE FM',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
        drm:
        {
            clearkey: {keyId: '0559c95496d44fadb94105b9176c3579',key: '40d8bb2a46ffd03540e0c6210ece57ce',},
        },
    },
    {
        name: 'TV MARIA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd',
        drm:
        {
            clearkey: {keyId: 'fa3998b9a4de40659725ebc5151250d6',key: '998f1294b122bbf1a96c1ddc0cbb229f',},
        },
    },
    {
        name: 'TV5 HD',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
        drm:
        {
            clearkey: {keyId: '2615129ef2c846a9bbd43a641c7303ef',key: '07c7f996b1734ea288641a68e1cfdc4d',},
        },
    },
    {
        name: 'TV5 MONDE',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd',
        drm:
        {
            clearkey: {keyId: 'fba5a720b4a541b286552899ba86e38b',key: 'f63fa50423148bfcbaa58c91dfcffd0e',},
        },
    },
    {
        name: 'TVN PREMIUM',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        drm:
        {
            clearkey: {keyId: 'e1bde543e8a140b38d3f84ace746553e',key: 'b712c4ec307300043333a6899a402c10',},
        },
    },
    {
        name: 'TVN MOVIES PINOY',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
        drm:
        {
            clearkey: {keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',key: '3471b2464b5c7b033a03bb8307d9fa35',},
        },
    },
    {
        name: 'TVUP',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
        drm:
        {
            clearkey: {keyId: '83e813ccd4ca4837afd611037af02f63',key: 'a97c515dbcb5dcbc432bbd09d15afd41',},
        },
    },
    {
        name: 'UAAP VARSITY CHANNEL',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
        drm:
        {
            clearkey: {keyId: '95588338ee37423e99358a6d431324b9',key: '6e0f50a12f36599a55073868f814e81e',},
        },
    },
    {
        name: 'VIVA CINEMA',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
        drm:
        {
            clearkey: {keyId: '07aa813bf2c147748046edd930f7736e',key: '3bd6688b8b44e96201e753224adfc8fb',},
        },
    },
    {
        name: 'WARNER TV',
        category: 'Cignal',
        type: 'mpd',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd',
        drm:
        {
            clearkey: {keyId: '4503cf86bca3494ab95a77ed913619a0',key: 'afc9c8f627fb3fb255dee8e3b0fe1d71',},
        },
    },
  {
  name: 'GMA',
        category: 'Converge',
        type: 'mpd',
        url: 'http://143.44.136.110:6910/001/2/ch00000090990000001093/manifest.mpd?virtualDomain=001.live_hls.zte.com',
        drm:
        {
            clearkey: {keyId: '31363231383438333031323033393138',key: '38694e34324d543478316b7455753437',},
        },
    },
    {
        "category": "Converge",
        "name": "A2Z",
        "url": "https://ott.athenatv.net/stream/phcathenatv/a2z/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "ALIWTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/aliwtv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "ALLTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/alltv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "ANC",
        "url": "https://ott.athenatv.net/stream/phcathenatv/ancph/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "BILYONARYOCH",
        "url": "https://ott.athenatv.net/stream/phcathenatv/billonaryonewschannel/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "BLASTPH.BLAST.SPORTS",
        "url": "https://ott.athenatv.net/stream/phcathenatv/blastsports/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "BOOMERANG",
        "url": "https://ott.athenatv.net/stream/skyuk/boomerang/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "BUKO",
        "url": "https://ott.athenatv.net/stream/phcathenatv/buko/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CARTOONNETWORK",
        "url": "https://ott.athenatv.net/stream/skyuk/cartoonnetwork/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CARTOONITO.(HD).SG",
        "url": "https://ott.athenatv.net/stream/skyuk/cartoonito/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CELESTIAL.MOVIES.PINOY",
        "url": "https://ott.athenatv.net/stream/phcathenatv/celestialmoviespinoy/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CINEMA.ONE",
        "url": "https://ott.athenatv.net/stream/phcathenatv/cinemaone/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CINEMO!",
        "url": "https://ott.athenatv.net/stream/phcathenatv/cinemo/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CLTV36",
        "url": "https://ott.athenatv.net/stream/phcathenatv/cltv36/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "DZMMTELERADYO",
        "url": "https://ott.athenatv.net/stream/phcathenatv/dzmmteleradyo/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "DZMMTELERADYOSD",
        "url": "https://ott.athenatv.net/stream/phcathenatv/dzmmteleradyosd/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "DZRHTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/dzrhtv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "GMA",
        "url": "https://ott.udptv.net/stream/iptv/gma/master.m3u8?u=discord.gg/civ3&p=fb3f8f99693741cbbfd578e30b02b25f056a1f0838491f6e186eb1340e3f2c13"
    },
    {
        "category": "Converge",
        "name": "GTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/gtv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "IBC.TV.13",
        "url": "https://ott.athenatv.net/stream/phcathenatv/ibc13/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "INCTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/inctv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "JEEPNEY.TV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/jeepneytv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "KAPAMILYA.CHANNEL",
        "url": "https://ott.athenatv.net/stream/phcathenatv/kapamilyachannel/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "KNOWLEDGE.CHANNEL",
        "url": "https://ott.athenatv.net/stream/phcathenatv/knowledgechannel/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "METRO.CHANNEL",
        "url": "https://ott.athenatv.net/stream/phcathenatv/metrochannel/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CG.MPTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/mptv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "MYX",
        "url": "https://ott.athenatv.net/stream/phcathenatv/myxph/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CGNL.NBA",
        "url": "https://ott.athenatv.net/stream/phcathenatv/nbatvphilippines/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "NET.25",
        "url": "https://ott.athenatv.net/stream/phcathenatv/net25/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "NICK.JR..MY",
        "url": "https://ott.athenatv.net/stream/skyuk/nickjr/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "NICKELODEON",
        "url": "https://ott.athenatv.net/stream/skyuk/nickelodeon/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "NICKTOONS",
        "url": "https://ott.athenatv.net/stream/skyuk/nicktoons/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "ONENEWS.HD",
        "url": "https://ott.athenatv.net/stream/phcathenatv/onenews/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CINEMA.ONE",
        "url": "https://ott.athenatv.net/stream/phcathenatv/oneph/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "ONESPORTS",
        "url": "https://ott.athenatv.net/stream/phcathenatv/onesports/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "ONESPORTSPLUS.HD",
        "url": "https://ott.athenatv.net/stream/phcathenatv/onesports-1/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "PBARUSH.HD",
        "url": "https://ott.athenatv.net/stream/phcathenatv/pbarush/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "PBO",
        "url": "https://ott.athenatv.net/stream/phcathenatv/pbo/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "PREMIERSPORTS1",
        "url": "https://ott.athenatv.net/stream/skyie/premiersports1/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "PREMIERSPORTS2",
        "url": "https://ott.athenatv.net/stream/skyie/premiersports2/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "PTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/ptv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "RPTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/rptv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYARTS",
        "url": "https://ott.athenatv.net/stream/skyuk/skyarts/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYATLANTIC",
        "url": "https://ott.athenatv.net/stream/skyuk/skyatlantic/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCINEMAACTION.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skycinemaaction/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCINEMAANIMATION.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skycinemaanimation/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCINEMACOMEDY",
        "url": "https://ott.athenatv.net/stream/skyuk/skycinemacomedy/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCINEMADRAMA.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skycinemadrama/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCINEMAFAMILY.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skycinemafamily/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCINEMAGREATS.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skycinemagreats/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCINEMAPREMIERE.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skycinemapremier/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCINEMATHRILLER.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skycinemathriller/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKY.COMEDY.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skycomedy/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYCRIME",
        "url": "https://ott.athenatv.net/stream/skyuk/skycrime/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYDOCUMENTARIES",
        "url": "https://ott.athenatv.net/stream/skyuk/skydocumentaries/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYHISTORY",
        "url": "https://ott.athenatv.net/stream/skyuk/skyhistory/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYKIDS",
        "url": "https://ott.athenatv.net/stream/skyuk/skykids/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYMAX.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skymax/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYNATURE",
        "url": "https://ott.athenatv.net/stream/skyuk/skynature/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYNEWS",
        "url": "https://ott.athenatv.net/stream/skyuk/skynews/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSCIFI",
        "url": "https://ott.athenatv.net/stream/skyuk/skyscifi/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSHOWCASE",
        "url": "https://ott.athenatv.net/stream/skyuk/skyshowcase/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSPORTSACTION",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsaction/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSPORTSCRICKET",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportscricket/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSP.F1.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsf1/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSP.F1.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsf1uhd/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSP.FBALL.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsfootball/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSPORTSGOLF",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsgolf/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSPMAINEVHD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsmainevent/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSPMAINEVHD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsmaineventuhd/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSPORTSMIX",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsmix/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSP.NEWS.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsnews/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSP+.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsplus/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSP.PL.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportspremierleague/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSP.RACING.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportsracing/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYSP.TENNIS.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyuk/skysportstennis/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SKYWITNESS",
        "url": "https://ott.athenatv.net/stream/skyuk/skywitness/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SMNI",
        "url": "https://ott.athenatv.net/stream/phcathenatv/smni/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "SOLARFLIX",
        "url": "https://ott.athenatv.net/stream/phcathenatv/solarflix/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "TAGALIZED.MOVIE.CHANNEL",
        "url": "https://ott.athenatv.net/stream/phcathenatv/tmc/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "TNT.SPORTS.1.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyie/tntsports1/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "TNT.SPORTS.2.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyie/tntsports2/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "TNT.SPORTS.3.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyie/tntsports3/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "TNT.SPORTS.4.HD.UK",
        "url": "https://ott.athenatv.net/stream/skyie/tntsports4/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "TRUEFMTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/truefmtv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "TVMARIA",
        "url": "https://ott.athenatv.net/stream/phcathenatv/tvmaria/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "TV5",
        "url": "https://ott.athenatv.net/stream/phcathenatv/tv5/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "CG.TVNMOVIE",
        "url": "https://ott.athenatv.net/stream/phcathenatv/tvnmoviespinoy/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "UAAPVARSITYCHANNEL",
        "url": "https://ott.athenatv.net/stream/phcathenatv/uaapvarsitychannel/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "UNTV",
        "url": "https://ott.athenatv.net/stream/phcathenatv/untv/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "category": "Converge",
        "name": "VIVA.CINEMA",
        "url": "https://ott.athenatv.net/stream/phcathenatv/vivacinema/master.m3u8?u=phc-free&p=8c43211c3fe7f44b1af3deedb89d50ecef2ee4c97eb987071fd3fea18a7b0af7"
    },
    {
        "name": 'ZEE SINE',
        "category": 'Converge',
        "type": 'hls',
        "url": 'https://amg17931-zee-amg17931c9-samsung-ph-6528.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeesine-samsungph/playlist.m3u8',
    }
]
