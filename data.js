var APP_DATA = {
  "scenes": [
    {
      "id": "0-bar",
      "name": "Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12497655109082118,
          "pitch": 0.07024862509351237,
          "rotation": 0,
          "target": "3-entre"
        },
        {
          "yaw": -0.30960255745052834,
          "pitch": 0.12545431484391223,
          "rotation": 0,
          "target": "1-restauration"
        },
        {
          "yaw": -0.6496864956145885,
          "pitch": 0.0852496597365473,
          "rotation": 0,
          "target": "5-terrasse"
        },
        {
          "yaw": 1.0448542111842105,
          "pitch": 0.36870407342696865,
          "rotation": 0,
          "target": "4-espace-dgustation"
        },
        {
          "yaw": -1.128351576009722,
          "pitch": 0.14169657577093808,
          "rotation": 0,
          "target": "2-espace-restauration"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-restauration",
      "name": "Restauration",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0825428107045294,
          "pitch": 0.06988308535716214,
          "rotation": 0,
          "target": "0-bar"
        },
        {
          "yaw": -0.45217715658824886,
          "pitch": 0.12354044659966945,
          "rotation": 0,
          "target": "4-espace-dgustation"
        },
        {
          "yaw": 0.8254850798524309,
          "pitch": 0.1799184892495731,
          "rotation": 0,
          "target": "2-espace-restauration"
        },
        {
          "yaw": -2.4876922976194376,
          "pitch": 0.5014702684217802,
          "rotation": 0,
          "target": "3-entre"
        },
        {
          "yaw": 1.8169760812334106,
          "pitch": 0.2794789004229621,
          "rotation": 0,
          "target": "5-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-espace-restauration",
      "name": "Espace restauration",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2028293821895346,
          "pitch": 0.16685120013451638,
          "rotation": 0,
          "target": "0-bar"
        },
        {
          "yaw": -0.34644332139651723,
          "pitch": 0.09786184319839819,
          "rotation": 0,
          "target": "3-entre"
        },
        {
          "yaw": -0.3298508746092157,
          "pitch": 0.26400196355942107,
          "rotation": 0,
          "target": "1-restauration"
        },
        {
          "yaw": 0.9399212658059124,
          "pitch": 0.11235794688575318,
          "rotation": 0,
          "target": "4-espace-dgustation"
        },
        {
          "yaw": -0.9632958154146003,
          "pitch": 0.19043932593964996,
          "rotation": 0,
          "target": "5-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entre",
      "name": "Entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08418272118095338,
          "pitch": 0.12546225967240687,
          "rotation": 0,
          "target": "2-espace-restauration"
        },
        {
          "yaw": -0.42902317900178844,
          "pitch": 0.0524545044483844,
          "rotation": 0,
          "target": "0-bar"
        },
        {
          "yaw": 0.0045637103909044185,
          "pitch": 0.5731374810481196,
          "rotation": 0,
          "target": "1-restauration"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-espace-dgustation",
      "name": "Espace dégustation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6643377056844031,
          "pitch": 0.17180265435067454,
          "rotation": 0,
          "target": "0-bar"
        },
        {
          "yaw": 0.195460992500756,
          "pitch": 0.07305939874497724,
          "rotation": 0,
          "target": "5-terrasse"
        },
        {
          "yaw": -0.2787109900850666,
          "pitch": 0.12152464189111001,
          "rotation": 0,
          "target": "2-espace-restauration"
        },
        {
          "yaw": 0.5923630356021512,
          "pitch": 0.14295996837163116,
          "rotation": 0,
          "target": "1-restauration"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-terrasse",
      "name": "Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8045206383395076,
          "pitch": 0.03261222259761176,
          "rotation": 0,
          "target": "0-bar"
        },
        {
          "yaw": -1.0195183731802402,
          "pitch": 0.0472010056331591,
          "rotation": 0,
          "target": "4-espace-dgustation"
        },
        {
          "yaw": -1.55689323575319,
          "pitch": 0.2594465869720697,
          "rotation": 0,
          "target": "1-restauration"
        },
        {
          "yaw": -0.3782088879161378,
          "pitch": 0.1952854719024284,
          "rotation": 0,
          "target": "2-espace-restauration"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "La Cadenelle",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
