# HERE API Examples - WPS and Routing

This file contains working examples of WPS (Waypoint Sequencing) and Routing API calls and responses.

## WPS API Call (Working Example)

### Request URL 

### [https://wps.hereapi.com/v8/findsequence2?start=Cocheras;42.873681,-2.644691&destination1=S1;42.9543196,-2.63681&destination2=S2;42.9814043,-2.6422558&destination3=S3;42.9828626,-2.6420071&destination4=S4;42.9836919,-2.6414265&destination5=S5;42.9852955,-2.6418274&destination6=S6;42.986853,-2.6401184&destination7=S7;43.0138495,-2.6113773&destination8=S8;43.0349013,-2.564474&destination9=S9;43.0410101,-2.557105&destination10=S10;43.0378738,-2.5523567&destination11=S11;43.0482566,-2.5392404&destination12=S12;43.0421488,-2.537881&destination13=S13;43.0414005,-2.5404819&destination14=S14;43.0460302,-2.5592411&destination15=S15;43.0479105,-2.5583375&destination16=S16;43.040573,-2.5655513&destination17=S17;43.0462869,-2.5667161&destination18=S18;43.0477521,-2.5659146&destination19=S19;43.05006787569227,-2.565495998718253&destination20=S20;43.0532421,-2.5635073&destination21=S21;43.0574245,-2.5648001&destination22=S22;43.053571373397034,-2.5673756242523607&destination23=S23;43.0648279,-2.5847074&destination24=S24;43.0580231,-2.5899042&destination25=S25;43.0500955,-2.5730227&destination26=S26;43.0510313,-2.565846&destination27=S28;43.0483527,-2.5826756&destination28=S29;43.0447116,-2.581495&destination29=S30;43.0387642,-2.5784897&destination30=S31;43.0397502,-2.575778&destination31=S32;43.0359617,-2.5714969&destination32=S165;42.9558924,-2.6262414&destination33=S166;42.9598551,-2.6192524&destination34=S167;42.9573153,-2.6324468&destination35=S168;42.9647771,-2.6356325&destination36=S170;42.9650717,-2.6309927&destination37=S172;42.9605584,-2.6280071&destination38=S175;42.9426495,-2.6336268&destination39=S177;42.9698961,-2.6508016&destination40=S178;42.968724,-2.6466997&destination41=S180;42.9721298,-2.6465055&destination42=S182;42.9779654,-2.6440661&destination43=S183;42.9768597,-2.6440819&destination44=S184;42.9782355,-2.6430159&destination45=S185;42.9806625,-2.6445696&destination46=S186;42.9799272,-2.6422221&destination47=S188;42.9597003,-2.6432169&destination48=S190;42.9543602,-2.6529036&destination49=S191;42.9560311,-2.6533618&destination50=S195;42.9515051,-2.6468179&destination51=S196;42.9540155,-2.6392337&destination52=S249;42.9435683,-2.638346&destination53=S251;42.9700937,-2.6258041&destination54=S252;42.9693726,-2.6178734&destination55=S253;42.9562496,-2.6511439&destination56=S260;43.0489243,-2.5663936&destination57=S299;42.978893,-2.6446496&destination58=S301;42.9751291,-2.6439995&destination59=S343;42.941478126851464,-2.6363478509426637&destination60=S356;43.05297236747014,-2.5660836179840354&destination61=S358;43.05220420011726,-2.5648468664497672&destination62=S359;43.03922463415389,-2.553426863773872&destination63=S361;42.959500034797244,-2.6709714056807425&destination64=S363;42.97992012730526,-2.6435983696159115&destination65=S364;42.95391181595742,-2.6508515445439906&end=Planta_resto;42.837163,-2.754061&improveFor=time&departure=2025-10-08T14:00:00%2B02:00&mode=fastest;truck;traffic:enabled&apikey={{Test_API_Key}](https://wps.hereapi.com/v8/findsequence2?start=Cocheras;42.873681,-2.644691&destination1=S1;42.9543196,-2.63681&destination2=S2;42.9814043,-2.6422558&destination3=S3;42.9828626,-2.6420071&destination4=S4;42.9836919,-2.6414265&destination5=S5;42.9852955,-2.6418274&destination6=S6;42.986853,-2.6401184&destination7=S7;43.0138495,-2.6113773&destination8=S8;43.0349013,-2.564474&destination9=S9;43.0410101,-2.557105&destination10=S10;43.0378738,-2.5523567&destination11=S11;43.0482566,-2.5392404&destination12=S12;43.0421488,-2.537881&destination13=S13;43.0414005,-2.5404819&destination14=S14;43.0460302,-2.5592411&destination15=S15;43.0479105,-2.5583375&destination16=S16;43.040573,-2.5655513&destination17=S17;43.0462869,-2.5667161&destination18=S18;43.0477521,-2.5659146&destination19=S19;43.05006787569227,-2.565495998718253&destination20=S20;43.0532421,-2.5635073&destination21=S21;43.0574245,-2.5648001&destination22=S22;43.053571373397034,-2.5673756242523607&destination23=S23;43.0648279,-2.5847074&destination24=S24;43.0580231,-2.5899042&destination25=S25;43.0500955,-2.5730227&destination26=S26;43.0510313,-2.565846&destination27=S28;43.0483527,-2.5826756&destination28=S29;43.0447116,-2.581495&destination29=S30;43.0387642,-2.5784897&destination30=S31;43.0397502,-2.575778&destination31=S32;43.0359617,-2.5714969&destination32=S165;42.9558924,-2.6262414&destination33=S166;42.9598551,-2.6192524&destination34=S167;42.9573153,-2.6324468&destination35=S168;42.9647771,-2.6356325&destination36=S170;42.9650717,-2.6309927&destination37=S172;42.9605584,-2.6280071&destination38=S175;42.9426495,-2.6336268&destination39=S177;42.9698961,-2.6508016&destination40=S178;42.968724,-2.6466997&destination41=S180;42.9721298,-2.6465055&destination42=S182;42.9779654,-2.6440661&destination43=S183;42.9768597,-2.6440819&destination44=S184;42.9782355,-2.6430159&destination45=S185;42.9806625,-2.6445696&destination46=S186;42.9799272,-2.6422221&destination47=S188;42.9597003,-2.6432169&destination48=S190;42.9543602,-2.6529036&destination49=S191;42.9560311,-2.6533618&destination50=S195;42.9515051,-2.6468179&destination51=S196;42.9540155,-2.6392337&destination52=S249;42.9435683,-2.638346&destination53=S251;42.9700937,-2.6258041&destination54=S252;42.9693726,-2.6178734&destination55=S253;42.9562496,-2.6511439&destination56=S260;43.0489243,-2.5663936&destination57=S299;42.978893,-2.6446496&destination58=S301;42.9751291,-2.6439995&destination59=S343;42.941478126851464,-2.6363478509426637&destination60=S356;43.05297236747014,-2.5660836179840354&destination61=S358;43.05220420011726,-2.5648468664497672&destination62=S359;43.03922463415389,-2.553426863773872&destination63=S361;42.959500034797244,-2.6709714056807425&destination64=S363;42.97992012730526,-2.6435983696159115&destination65=S364;42.95391181595742,-2.6508515445439906&end=Planta_resto;42.837163,-2.754061&improveFor=time&departure=2025-10-08T14:00:00%2B02:00&mode=fastest;truck;traffic:enabled&apikey=%7B%7BTest_API_Key%7D)}



 
### WPS Response
```json
```json
{
    "results": [
        {
            "waypoints": [
                {
                    "id": "Cocheras",
                    "lat": 42.873681,
                    "lng": -2.644691,
                    "sequence": 0,
                    "estimatedArrival": null,
                    "estimatedDeparture": "2025-10-08T14:00:00+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S343",
                    "lat": 42.941478126851464,
                    "lng": -2.6363478509426637,
                    "sequence": 1,
                    "estimatedArrival": "2025-10-08T14:11:15+02:00",
                    "estimatedDeparture": "2025-10-08T14:11:15+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S175",
                    "lat": 42.9426495,
                    "lng": -2.6336268,
                    "sequence": 2,
                    "estimatedArrival": "2025-10-08T14:12:14+02:00",
                    "estimatedDeparture": "2025-10-08T14:12:14+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S249",
                    "lat": 42.9435683,
                    "lng": -2.638346,
                    "sequence": 3,
                    "estimatedArrival": "2025-10-08T14:13:48+02:00",
                    "estimatedDeparture": "2025-10-08T14:13:48+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S165",
                    "lat": 42.9558924,
                    "lng": -2.6262414,
                    "sequence": 4,
                    "estimatedArrival": "2025-10-08T14:16:41+02:00",
                    "estimatedDeparture": "2025-10-08T14:16:41+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S166",
                    "lat": 42.9598551,
                    "lng": -2.6192524,
                    "sequence": 5,
                    "estimatedArrival": "2025-10-08T14:17:56+02:00",
                    "estimatedDeparture": "2025-10-08T14:17:56+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S167",
                    "lat": 42.9573153,
                    "lng": -2.6324468,
                    "sequence": 6,
                    "estimatedArrival": "2025-10-08T14:21:06+02:00",
                    "estimatedDeparture": "2025-10-08T14:21:06+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S168",
                    "lat": 42.9647771,
                    "lng": -2.6356325,
                    "sequence": 7,
                    "estimatedArrival": "2025-10-08T14:24:09+02:00",
                    "estimatedDeparture": "2025-10-08T14:24:09+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S172",
                    "lat": 42.9605584,
                    "lng": -2.6280071,
                    "sequence": 8,
                    "estimatedArrival": "2025-10-08T14:27:00+02:00",
                    "estimatedDeparture": "2025-10-08T14:27:00+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S251",
                    "lat": 42.9700937,
                    "lng": -2.6258041,
                    "sequence": 9,
                    "estimatedArrival": "2025-10-08T14:31:22+02:00",
                    "estimatedDeparture": "2025-10-08T14:31:22+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S252",
                    "lat": 42.9693726,
                    "lng": -2.6178734,
                    "sequence": 10,
                    "estimatedArrival": "2025-10-08T14:34:13+02:00",
                    "estimatedDeparture": "2025-10-08T14:34:13+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S170",
                    "lat": 42.9650717,
                    "lng": -2.6309927,
                    "sequence": 11,
                    "estimatedArrival": "2025-10-08T14:37:40+02:00",
                    "estimatedDeparture": "2025-10-08T14:37:40+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S182",
                    "lat": 42.9779654,
                    "lng": -2.6440661,
                    "sequence": 12,
                    "estimatedArrival": "2025-10-08T14:40:58+02:00",
                    "estimatedDeparture": "2025-10-08T14:40:58+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S183",
                    "lat": 42.9768597,
                    "lng": -2.6440819,
                    "sequence": 13,
                    "estimatedArrival": "2025-10-08T14:41:35+02:00",
                    "estimatedDeparture": "2025-10-08T14:41:35+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S184",
                    "lat": 42.9782355,
                    "lng": -2.6430159,
                    "sequence": 14,
                    "estimatedArrival": "2025-10-08T14:43:08+02:00",
                    "estimatedDeparture": "2025-10-08T14:43:08+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S363",
                    "lat": 42.97992012730526,
                    "lng": -2.6435983696159115,
                    "sequence": 15,
                    "estimatedArrival": "2025-10-08T14:44:58+02:00",
                    "estimatedDeparture": "2025-10-08T14:44:58+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S186",
                    "lat": 42.9799272,
                    "lng": -2.6422221,
                    "sequence": 16,
                    "estimatedArrival": "2025-10-08T14:46:39+02:00",
                    "estimatedDeparture": "2025-10-08T14:46:39+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S2",
                    "lat": 42.9814043,
                    "lng": -2.6422558,
                    "sequence": 17,
                    "estimatedArrival": "2025-10-08T14:47:20+02:00",
                    "estimatedDeparture": "2025-10-08T14:47:20+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S6",
                    "lat": 42.986853,
                    "lng": -2.6401184,
                    "sequence": 18,
                    "estimatedArrival": "2025-10-08T14:48:34+02:00",
                    "estimatedDeparture": "2025-10-08T14:48:34+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S32",
                    "lat": 43.0359617,
                    "lng": -2.5714969,
                    "sequence": 19,
                    "estimatedArrival": "2025-10-08T14:59:31+02:00",
                    "estimatedDeparture": "2025-10-08T14:59:31+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S8",
                    "lat": 43.0349013,
                    "lng": -2.564474,
                    "sequence": 20,
                    "estimatedArrival": "2025-10-08T15:01:35+02:00",
                    "estimatedDeparture": "2025-10-08T15:01:35+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S16",
                    "lat": 43.040573,
                    "lng": -2.5655513,
                    "sequence": 21,
                    "estimatedArrival": "2025-10-08T15:03:41+02:00",
                    "estimatedDeparture": "2025-10-08T15:03:41+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S9",
                    "lat": 43.0410101,
                    "lng": -2.557105,
                    "sequence": 22,
                    "estimatedArrival": "2025-10-08T15:06:02+02:00",
                    "estimatedDeparture": "2025-10-08T15:06:02+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S15",
                    "lat": 43.0479105,
                    "lng": -2.5583375,
                    "sequence": 23,
                    "estimatedArrival": "2025-10-08T15:07:31+02:00",
                    "estimatedDeparture": "2025-10-08T15:07:31+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S14",
                    "lat": 43.0460302,
                    "lng": -2.5592411,
                    "sequence": 24,
                    "estimatedArrival": "2025-10-08T15:08:00+02:00",
                    "estimatedDeparture": "2025-10-08T15:08:00+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S359",
                    "lat": 43.03922463415389,
                    "lng": -2.553426863773872,
                    "sequence": 25,
                    "estimatedArrival": "2025-10-08T15:09:43+02:00",
                    "estimatedDeparture": "2025-10-08T15:09:43+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S10",
                    "lat": 43.0378738,
                    "lng": -2.5523567,
                    "sequence": 26,
                    "estimatedArrival": "2025-10-08T15:09:57+02:00",
                    "estimatedDeparture": "2025-10-08T15:09:57+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S13",
                    "lat": 43.0414005,
                    "lng": -2.5404819,
                    "sequence": 27,
                    "estimatedArrival": "2025-10-08T15:12:57+02:00",
                    "estimatedDeparture": "2025-10-08T15:12:57+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S12",
                    "lat": 43.0421488,
                    "lng": -2.537881,
                    "sequence": 28,
                    "estimatedArrival": "2025-10-08T15:13:49+02:00",
                    "estimatedDeparture": "2025-10-08T15:13:49+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S11",
                    "lat": 43.0482566,
                    "lng": -2.5392404,
                    "sequence": 29,
                    "estimatedArrival": "2025-10-08T15:15:13+02:00",
                    "estimatedDeparture": "2025-10-08T15:15:13+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S20",
                    "lat": 43.0532421,
                    "lng": -2.5635073,
                    "sequence": 30,
                    "estimatedArrival": "2025-10-08T15:21:02+02:00",
                    "estimatedDeparture": "2025-10-08T15:21:02+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S358",
                    "lat": 43.05220420011726,
                    "lng": -2.5648468664497672,
                    "sequence": 31,
                    "estimatedArrival": "2025-10-08T15:21:31+02:00",
                    "estimatedDeparture": "2025-10-08T15:21:31+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S26",
                    "lat": 43.0510313,
                    "lng": -2.565846,
                    "sequence": 32,
                    "estimatedArrival": "2025-10-08T15:22:16+02:00",
                    "estimatedDeparture": "2025-10-08T15:22:16+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S260",
                    "lat": 43.0489243,
                    "lng": -2.5663936,
                    "sequence": 33,
                    "estimatedArrival": "2025-10-08T15:23:28+02:00",
                    "estimatedDeparture": "2025-10-08T15:23:28+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S18",
                    "lat": 43.0477521,
                    "lng": -2.5659146,
                    "sequence": 34,
                    "estimatedArrival": "2025-10-08T15:23:57+02:00",
                    "estimatedDeparture": "2025-10-08T15:23:57+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S17",
                    "lat": 43.0462869,
                    "lng": -2.5667161,
                    "sequence": 35,
                    "estimatedArrival": "2025-10-08T15:24:32+02:00",
                    "estimatedDeparture": "2025-10-08T15:24:32+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S19",
                    "lat": 43.05006787569227,
                    "lng": -2.565495998718253,
                    "sequence": 36,
                    "estimatedArrival": "2025-10-08T15:26:05+02:00",
                    "estimatedDeparture": "2025-10-08T15:26:05+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S356",
                    "lat": 43.05297236747014,
                    "lng": -2.5660836179840354,
                    "sequence": 37,
                    "estimatedArrival": "2025-10-08T15:27:54+02:00",
                    "estimatedDeparture": "2025-10-08T15:27:54+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S22",
                    "lat": 43.053571373397034,
                    "lng": -2.5673756242523607,
                    "sequence": 38,
                    "estimatedArrival": "2025-10-08T15:28:25+02:00",
                    "estimatedDeparture": "2025-10-08T15:28:25+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S21",
                    "lat": 43.0574245,
                    "lng": -2.5648001,
                    "sequence": 39,
                    "estimatedArrival": "2025-10-08T15:30:37+02:00",
                    "estimatedDeparture": "2025-10-08T15:30:37+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S25",
                    "lat": 43.0500955,
                    "lng": -2.5730227,
                    "sequence": 40,
                    "estimatedArrival": "2025-10-08T15:35:46+02:00",
                    "estimatedDeparture": "2025-10-08T15:35:46+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S23",
                    "lat": 43.0648279,
                    "lng": -2.5847074,
                    "sequence": 41,
                    "estimatedArrival": "2025-10-08T15:41:20+02:00",
                    "estimatedDeparture": "2025-10-08T15:41:20+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S24",
                    "lat": 43.0580231,
                    "lng": -2.5899042,
                    "sequence": 42,
                    "estimatedArrival": "2025-10-08T15:45:18+02:00",
                    "estimatedDeparture": "2025-10-08T15:45:18+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S28",
                    "lat": 43.0483527,
                    "lng": -2.5826756,
                    "sequence": 43,
                    "estimatedArrival": "2025-10-08T15:48:31+02:00",
                    "estimatedDeparture": "2025-10-08T15:48:31+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S29",
                    "lat": 43.0447116,
                    "lng": -2.581495,
                    "sequence": 44,
                    "estimatedArrival": "2025-10-08T15:49:33+02:00",
                    "estimatedDeparture": "2025-10-08T15:49:33+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S30",
                    "lat": 43.0387642,
                    "lng": -2.5784897,
                    "sequence": 45,
                    "estimatedArrival": "2025-10-08T15:51:40+02:00",
                    "estimatedDeparture": "2025-10-08T15:51:40+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S31",
                    "lat": 43.0397502,
                    "lng": -2.575778,
                    "sequence": 46,
                    "estimatedArrival": "2025-10-08T15:52:39+02:00",
                    "estimatedDeparture": "2025-10-08T15:52:39+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S7",
                    "lat": 43.0138495,
                    "lng": -2.6113773,
                    "sequence": 47,
                    "estimatedArrival": "2025-10-08T15:59:19+02:00",
                    "estimatedDeparture": "2025-10-08T15:59:19+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S5",
                    "lat": 42.9852955,
                    "lng": -2.6418274,
                    "sequence": 48,
                    "estimatedArrival": "2025-10-08T16:03:46+02:00",
                    "estimatedDeparture": "2025-10-08T16:03:46+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S4",
                    "lat": 42.9836919,
                    "lng": -2.6414265,
                    "sequence": 49,
                    "estimatedArrival": "2025-10-08T16:04:36+02:00",
                    "estimatedDeparture": "2025-10-08T16:04:36+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S3",
                    "lat": 42.9828626,
                    "lng": -2.6420071,
                    "sequence": 50,
                    "estimatedArrival": "2025-10-08T16:05:24+02:00",
                    "estimatedDeparture": "2025-10-08T16:05:24+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S185",
                    "lat": 42.9806625,
                    "lng": -2.6445696,
                    "sequence": 51,
                    "estimatedArrival": "2025-10-08T16:06:22+02:00",
                    "estimatedDeparture": "2025-10-08T16:06:22+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S299",
                    "lat": 42.978893,
                    "lng": -2.6446496,
                    "sequence": 52,
                    "estimatedArrival": "2025-10-08T16:07:18+02:00",
                    "estimatedDeparture": "2025-10-08T16:07:18+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S180",
                    "lat": 42.9721298,
                    "lng": -2.6465055,
                    "sequence": 53,
                    "estimatedArrival": "2025-10-08T16:09:23+02:00",
                    "estimatedDeparture": "2025-10-08T16:09:23+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S177",
                    "lat": 42.9698961,
                    "lng": -2.6508016,
                    "sequence": 54,
                    "estimatedArrival": "2025-10-08T16:11:03+02:00",
                    "estimatedDeparture": "2025-10-08T16:11:03+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S178",
                    "lat": 42.968724,
                    "lng": -2.6466997,
                    "sequence": 55,
                    "estimatedArrival": "2025-10-08T16:13:16+02:00",
                    "estimatedDeparture": "2025-10-08T16:13:16+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S301",
                    "lat": 42.9751291,
                    "lng": -2.6439995,
                    "sequence": 56,
                    "estimatedArrival": "2025-10-08T16:16:25+02:00",
                    "estimatedDeparture": "2025-10-08T16:16:25+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S188",
                    "lat": 42.9597003,
                    "lng": -2.6432169,
                    "sequence": 57,
                    "estimatedArrival": "2025-10-08T16:19:08+02:00",
                    "estimatedDeparture": "2025-10-08T16:19:08+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S1",
                    "lat": 42.9543196,
                    "lng": -2.63681,
                    "sequence": 58,
                    "estimatedArrival": "2025-10-08T16:20:39+02:00",
                    "estimatedDeparture": "2025-10-08T16:20:39+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S196",
                    "lat": 42.9540155,
                    "lng": -2.6392337,
                    "sequence": 59,
                    "estimatedArrival": "2025-10-08T16:23:55+02:00",
                    "estimatedDeparture": "2025-10-08T16:23:55+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S364",
                    "lat": 42.95391181595742,
                    "lng": -2.6508515445439906,
                    "sequence": 60,
                    "estimatedArrival": "2025-10-08T16:26:50+02:00",
                    "estimatedDeparture": "2025-10-08T16:26:50+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S253",
                    "lat": 42.9562496,
                    "lng": -2.6511439,
                    "sequence": 61,
                    "estimatedArrival": "2025-10-08T16:27:39+02:00",
                    "estimatedDeparture": "2025-10-08T16:27:39+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S191",
                    "lat": 42.9560311,
                    "lng": -2.6533618,
                    "sequence": 62,
                    "estimatedArrival": "2025-10-08T16:28:39+02:00",
                    "estimatedDeparture": "2025-10-08T16:28:39+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S361",
                    "lat": 42.959500034797244,
                    "lng": -2.6709714056807425,
                    "sequence": 63,
                    "estimatedArrival": "2025-10-08T16:32:31+02:00",
                    "estimatedDeparture": "2025-10-08T16:32:31+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S190",
                    "lat": 42.9543602,
                    "lng": -2.6529036,
                    "sequence": 64,
                    "estimatedArrival": "2025-10-08T16:36:14+02:00",
                    "estimatedDeparture": "2025-10-08T16:36:14+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "S195",
                    "lat": 42.9515051,
                    "lng": -2.6468179,
                    "sequence": 65,
                    "estimatedArrival": "2025-10-08T16:37:45+02:00",
                    "estimatedDeparture": "2025-10-08T16:37:45+02:00",
                    "fulfilledConstraints": []
                },
                {
                    "id": "Planta_resto",
                    "lat": 42.837163,
                    "lng": -2.754061,
                    "sequence": 66,
                    "estimatedArrival": "2025-10-08T16:54:52+02:00",
                    "estimatedDeparture": null,
                    "fulfilledConstraints": []
                }
            ],
            "distance": "112297",
            "time": "10492",
            "interconnections": [
                {
                    "fromWaypoint": "Cocheras",
                    "toWaypoint": "S343",
                    "distance": 9373.0,
                    "time": 675.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S343",
                    "toWaypoint": "S175",
                    "distance": 313.0,
                    "time": 59.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S175",
                    "toWaypoint": "S249",
                    "distance": 507.0,
                    "time": 94.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S249",
                    "toWaypoint": "S165",
                    "distance": 1807.0,
                    "time": 173.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S165",
                    "toWaypoint": "S166",
                    "distance": 915.0,
                    "time": 75.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S166",
                    "toWaypoint": "S167",
                    "distance": 2017.0,
                    "time": 190.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S167",
                    "toWaypoint": "S168",
                    "distance": 2121.0,
                    "time": 183.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S168",
                    "toWaypoint": "S172",
                    "distance": 1204.0,
                    "time": 171.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S172",
                    "toWaypoint": "S251",
                    "distance": 1526.0,
                    "time": 262.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S251",
                    "toWaypoint": "S252",
                    "distance": 887.0,
                    "time": 171.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S252",
                    "toWaypoint": "S170",
                    "distance": 1710.0,
                    "time": 207.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S170",
                    "toWaypoint": "S182",
                    "distance": 2377.0,
                    "time": 198.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S182",
                    "toWaypoint": "S183",
                    "distance": 132.0,
                    "time": 37.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S183",
                    "toWaypoint": "S184",
                    "distance": 290.0,
                    "time": 93.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S184",
                    "toWaypoint": "S363",
                    "distance": 382.0,
                    "time": 110.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S363",
                    "toWaypoint": "S186",
                    "distance": 245.0,
                    "time": 101.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S186",
                    "toWaypoint": "S2",
                    "distance": 183.0,
                    "time": 41.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S2",
                    "toWaypoint": "S6",
                    "distance": 662.0,
                    "time": 74.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S6",
                    "toWaypoint": "S32",
                    "distance": 9913.0,
                    "time": 657.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S32",
                    "toWaypoint": "S8",
                    "distance": 831.0,
                    "time": 124.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S8",
                    "toWaypoint": "S16",
                    "distance": 1348.0,
                    "time": 126.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S16",
                    "toWaypoint": "S9",
                    "distance": 1368.0,
                    "time": 141.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S9",
                    "toWaypoint": "S15",
                    "distance": 859.0,
                    "time": 89.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S15",
                    "toWaypoint": "S14",
                    "distance": 226.0,
                    "time": 29.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S14",
                    "toWaypoint": "S359",
                    "distance": 997.0,
                    "time": 103.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S359",
                    "toWaypoint": "S10",
                    "distance": 170.0,
                    "time": 14.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S10",
                    "toWaypoint": "S13",
                    "distance": 2132.0,
                    "time": 180.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S13",
                    "toWaypoint": "S12",
                    "distance": 248.0,
                    "time": 52.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S12",
                    "toWaypoint": "S11",
                    "distance": 961.0,
                    "time": 84.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S11",
                    "toWaypoint": "S20",
                    "distance": 4067.0,
                    "time": 349.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S20",
                    "toWaypoint": "S358",
                    "distance": 165.0,
                    "time": 29.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S358",
                    "toWaypoint": "S26",
                    "distance": 223.0,
                    "time": 45.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S26",
                    "toWaypoint": "S260",
                    "distance": 354.0,
                    "time": 72.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S260",
                    "toWaypoint": "S18",
                    "distance": 160.0,
                    "time": 29.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S18",
                    "toWaypoint": "S17",
                    "distance": 230.0,
                    "time": 35.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S17",
                    "toWaypoint": "S19",
                    "distance": 482.0,
                    "time": 93.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S19",
                    "toWaypoint": "S356",
                    "distance": 476.0,
                    "time": 109.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S356",
                    "toWaypoint": "S22",
                    "distance": 131.0,
                    "time": 31.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S22",
                    "toWaypoint": "S21",
                    "distance": 1365.0,
                    "time": 132.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S21",
                    "toWaypoint": "S25",
                    "distance": 3136.0,
                    "time": 309.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S25",
                    "toWaypoint": "S23",
                    "distance": 3497.0,
                    "time": 334.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S23",
                    "toWaypoint": "S24",
                    "distance": 2366.0,
                    "time": 238.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S24",
                    "toWaypoint": "S28",
                    "distance": 1980.0,
                    "time": 193.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S28",
                    "toWaypoint": "S29",
                    "distance": 580.0,
                    "time": 62.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S29",
                    "toWaypoint": "S30",
                    "distance": 1257.0,
                    "time": 127.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S30",
                    "toWaypoint": "S31",
                    "distance": 379.0,
                    "time": 59.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S31",
                    "toWaypoint": "S7",
                    "distance": 5908.0,
                    "time": 400.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S7",
                    "toWaypoint": "S5",
                    "distance": 4653.0,
                    "time": 267.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S5",
                    "toWaypoint": "S4",
                    "distance": 196.0,
                    "time": 50.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S4",
                    "toWaypoint": "S3",
                    "distance": 175.0,
                    "time": 48.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S3",
                    "toWaypoint": "S185",
                    "distance": 439.0,
                    "time": 58.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S185",
                    "toWaypoint": "S299",
                    "distance": 237.0,
                    "time": 56.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S299",
                    "toWaypoint": "S180",
                    "distance": 845.0,
                    "time": 125.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S180",
                    "toWaypoint": "S177",
                    "distance": 577.0,
                    "time": 100.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S177",
                    "toWaypoint": "S178",
                    "distance": 732.0,
                    "time": 133.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S178",
                    "toWaypoint": "S301",
                    "distance": 964.0,
                    "time": 189.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S301",
                    "toWaypoint": "S188",
                    "distance": 2321.0,
                    "time": 163.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S188",
                    "toWaypoint": "S1",
                    "distance": 1293.0,
                    "time": 91.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S1",
                    "toWaypoint": "S196",
                    "distance": 1492.0,
                    "time": 196.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S196",
                    "toWaypoint": "S364",
                    "distance": 1189.0,
                    "time": 175.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S364",
                    "toWaypoint": "S253",
                    "distance": 263.0,
                    "time": 49.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S253",
                    "toWaypoint": "S191",
                    "distance": 318.0,
                    "time": 60.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S191",
                    "toWaypoint": "S361",
                    "distance": 2085.0,
                    "time": 232.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S361",
                    "toWaypoint": "S190",
                    "distance": 1992.0,
                    "time": 223.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S190",
                    "toWaypoint": "S195",
                    "distance": 613.0,
                    "time": 91.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "S195",
                    "toWaypoint": "Planta_resto",
                    "distance": 19453.0,
                    "time": 1027.0,
                    "rest": 0.0,
                    "waiting": 0.0
                }
            ],
            "description": "Targeted best time; with , improvement for traffic",
            "timeBreakdown": {
                "driving": 10492,
                "service": 0,
                "rest": 0,
                "waiting": 0,
                "break": 0
            }
        }
    ],
    "errors": [],
    "processingTimeDesc": "17126ms",
    "responseCode": "200",
    "warnings": null,
    "requestId": "edb23dfe-eafb-4ac5-9d2a-f2b909e59edf"
}
```

### [PASTE ROUTING REQUEST URL HERE]
### [https://router.hereapi.com/v8/routes?transportMode=truck&routingMode=fast&departureTime=2025-10-08T14:00:00%2B02:00&return=polyline,summary&origin=42.873681,-2.644691&via=42.941478126851464,-2.6363478509426637&via=42.9426495,-2.6336268&via=42.9435683,-2.638346&via=42.9558924,-2.6262414&via=42.9598551,-2.6192524&via=42.9573153,-2.6324468&via=42.9647771,-2.6356325&via=42.9605584,-2.6280071&via=42.9700937,-2.6258041&via=42.9693726,-2.6178734&via=42.9650717,-2.6309927&via=42.9779654,-2.6440661&via=42.9768597,-2.6440819&via=42.9782355,-2.6430159&via=42.97992012730526,-2.6435983696159115&via=42.9799272,-2.6422221&via=42.9814043,-2.6422558&via=42.986853,-2.6401184&via=43.0359617,-2.5714969&via=43.0349013,-2.564474&via=43.040573,-2.5655513&via=43.0410101,-2.557105&via=43.0479105,-2.5583375&via=43.0460302,-2.5592411&via=43.03922463415389,-2.553426863773872&via=43.0378738,-2.5523567&via=43.0414005,-2.5404819&via=43.0421488,-2.537881&via=43.0482566,-2.5392404&via=43.0532421,-2.5635073&via=43.05220420011726,-2.5648468664497672&via=43.0510313,-2.565846&via=43.0489243,-2.5663936&via=43.0477521,-2.5659146&via=43.0462869,-2.5667161&via=43.05006787569227,-2.565495998718253&via=43.05297236747014,-2.5660836179840354&via=43.053571373397034,-2.5673756242523607&via=43.0574245,-2.5648001&via=43.0500955,-2.5730227&via=43.0648279,-2.5847074&via=43.0580231,-2.5899042&via=43.0483527,-2.5826756&via=43.0447116,-2.581495&via=43.0387642,-2.5784897&via=43.0397502,-2.575778&via=43.0138495,-2.6113773&via=42.9852955,-2.6418274&via=42.9836919,-2.6414265&via=42.9828626,-2.6420071&via=42.9806625,-2.6445696&via=42.978893,-2.6446496&via=42.9721298,-2.6465055&via=42.9698961,-2.6508016&via=42.968724,-2.6466997&via=42.9751291,-2.6439995&via=42.9597003,-2.6432169&via=42.9543196,-2.63681&via=42.9540155,-2.6392337&via=42.95391181595742,-2.6508515445439906&via=42.9562496,-2.6511439&via=42.9560311,-2.6533618&via=42.959500034797244,-2.6709714056807425&via=42.9543602,-2.6529036&via=42.9515051,-2.6468179&destination=42.837163,-2.754061&apiKey={{Test_API_Key}](https://router.hereapi.com/v8/routes?transportMode=truck&routingMode=fast&departureTime=2025-10-08T14:00:00%2B02:00&return=polyline,summary&origin=42.873681,-2.644691&via=42.941478126851464,-2.6363478509426637&via=42.9426495,-2.6336268&via=42.9435683,-2.638346&via=42.9558924,-2.6262414&via=42.9598551,-2.6192524&via=42.9573153,-2.6324468&via=42.9647771,-2.6356325&via=42.9605584,-2.6280071&via=42.9700937,-2.6258041&via=42.9693726,-2.6178734&via=42.9650717,-2.6309927&via=42.9779654,-2.6440661&via=42.9768597,-2.6440819&via=42.9782355,-2.6430159&via=42.97992012730526,-2.6435983696159115&via=42.9799272,-2.6422221&via=42.9814043,-2.6422558&via=42.986853,-2.6401184&via=43.0359617,-2.5714969&via=43.0349013,-2.564474&via=43.040573,-2.5655513&via=43.0410101,-2.557105&via=43.0479105,-2.5583375&via=43.0460302,-2.5592411&via=43.03922463415389,-2.553426863773872&via=43.0378738,-2.5523567&via=43.0414005,-2.5404819&via=43.0421488,-2.537881&via=43.0482566,-2.5392404&via=43.0532421,-2.5635073&via=43.05220420011726,-2.5648468664497672&via=43.0510313,-2.565846&via=43.0489243,-2.5663936&via=43.0477521,-2.5659146&via=43.0462869,-2.5667161&via=43.05006787569227,-2.565495998718253&via=43.05297236747014,-2.5660836179840354&via=43.053571373397034,-2.5673756242523607&via=43.0574245,-2.5648001&via=43.0500955,-2.5730227&via=43.0648279,-2.5847074&via=43.0580231,-2.5899042&via=43.0483527,-2.5826756&via=43.0447116,-2.581495&via=43.0387642,-2.5784897&via=43.0397502,-2.575778&via=43.0138495,-2.6113773&via=42.9852955,-2.6418274&via=42.9836919,-2.6414265&via=42.9828626,-2.6420071&via=42.9806625,-2.6445696&via=42.978893,-2.6446496&via=42.9721298,-2.6465055&via=42.9698961,-2.6508016&via=42.968724,-2.6466997&via=42.9751291,-2.6439995&via=42.9597003,-2.6432169&via=42.9543196,-2.63681&via=42.9540155,-2.6392337&via=42.95391181595742,-2.6508515445439906&via=42.9562496,-2.6511439&via=42.9560311,-2.6533618&via=42.959500034797244,-2.6709714056807425&via=42.9543602,-2.6529036&via=42.9515051,-2.6468179&destination=42.837163,-2.754061&apiKey=%7B%7BTest_API_Key%7D)}

### [PASTE ROUTING RESPONSE JSON HERE - especially the sections array]

### {
    "routes": [
        {
            "id": "338f81c4-a9cd-4543-9e1b-55f85e0f649d",
            "sections": [
                {
                    "id": "21ddb824-84b3-4066-bcaf-63c79a4aad4b",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:00:00+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.8734721,
                                "lng": -2.6448493
                            },
                            "originalLocation": {
                                "lat": 42.873681,
                                "lng": -2.644691
                            }
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:11:15+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.941478,
                                "lng": -2.63629
                            },
                            "originalLocation": {
                                "lat": 42.9414781,
                                "lng": -2.6363479
                            },
                            "waypoint": 0
                        }
                    },
                    "summary": {
                        "duration": 675,
                        "length": 9373,
                        "baseDuration": 648
                    },
                    "polyline": "BGgo54xCh3thF8Yh8B0FrO4D8B4D7BoBvCUzFTvCvCjDoBnQU3DwCnfoB7VTjIAjIrE_TnG7Q7LjcvWv0BjNzezZz8BwHjSoG3S8Q7zBwRj1B0U79BkIzZwH7VkS74BwCnL4I3csO3rBwCrEgKwCgKnB8LU4DA4DAwgBUwMAkIAsT8B0UgFsnBoLoQgFUwHwCsE4DwCkDTwC7BsJAoGUwH8BkSgF8pBkN8zBoQkX4IwgBgKopBkN0oB8LsyDokB0rCgZsJkD8pBsO4IkDwWkIoQ0FgwCkcwyCwb0Z4I0mCgUwvBoL0jB0KwRgFw-BsT03B8Q01Cwb8iCwRkckIwhDgekwB0PwmDsdk1B4NgyBsJwjC8Q40J4kC4_B4NgZsE4c4DoaoBwbT4NnBof3DgrC3N8fzF03B7GwRTkSA0jBwCkSwCsTsEgtB4N4c8L8kB4S4DwCsY0PgUwM4nD8nC8a0PkcgPoa8L0tBsOsiBwHo2CoQ0tB8G4N8Bsd4DgtBsE4zC8G0wCkD8xCA8aAwgBoB8V8BsTwC0jBoGofwHwW8G4XwHsTwH8oE46BsoDouB8zBwWoagU4I4IwMgPjI0KjNoQ4ckNosC4hB8foQwWgK8VsJ0KsE4N4DzF4SjIsTnLsYnLsJvM4NzPwMvRwM3I8LjIU_JkI3I4D7DA",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "f7e2ef67-8f86-4f5d-8fbe-e4ce2d5e9254",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:11:15+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.941478,
                                "lng": -2.63629
                            },
                            "originalLocation": {
                                "lat": 42.9414781,
                                "lng": -2.6363479
                            },
                            "waypoint": 0
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:12:14+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9426126,
                                "lng": -2.6336361
                            },
                            "originalLocation": {
                                "lat": 42.9426495,
                                "lng": -2.6336268
                            },
                            "waypoint": 1
                        }
                    },
                    "summary": {
                        "duration": 59,
                        "length": 313,
                        "baseDuration": 59
                    },
                    "polyline": "BGsi-8xCjg9gF8DA4I3DgKjIkIT7B8GT8GTwCAsY0FssB8B4I0eozBsEgPoBgPNsD",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "1e71c4ae-a329-4f67-8062-16355bb7b520",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:12:14+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9426126,
                                "lng": -2.6336361
                            },
                            "originalLocation": {
                                "lat": 42.9426495,
                                "lng": -2.6336268
                            },
                            "waypoint": 1
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:13:48+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9435766,
                                "lng": -2.6383829
                            },
                            "originalLocation": {
                                "lat": 42.9435683,
                                "lng": -2.638346
                            },
                            "waypoint": 2
                        }
                    },
                    "summary": {
                        "duration": 94,
                        "length": 507,
                        "baseDuration": 94
                    },
                    "polyline": "BGqpg9xCn63gFOrDnB_OrE_OzenzB7B3IzFrsBArYUvCU7G8B7G4I7LwRvM0PvMwM3NoLrJoLrYkIrT0F3S6JmE",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "89de4c03-d527-4b22-bdbe-d9fb8a514e8b",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:13:48+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9435766,
                                "lng": -2.6383829
                            },
                            "originalLocation": {
                                "lat": 42.9435683,
                                "lng": -2.638346
                            },
                            "waypoint": 2
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:16:41+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9559558,
                                "lng": -2.6264316
                            },
                            "originalLocation": {
                                "lat": 42.9558924,
                                "lng": -2.6262415
                            },
                            "waypoint": 3
                        }
                    },
                    "summary": {
                        "duration": 173,
                        "length": 1807,
                        "baseDuration": 172
                    },
                    "polyline": "BGyli9xC9ihhFmZ6KkNsEsvC0PgUkDkXgFsJ4DkN4IoLkIoLoLoqD42DoGgF8G4D4DUoQkDoGwCwCAwRsOsTokBkIgPwR0e4I8LgjB0oBkX0Z4DsE0UoVsJgKkXgZk6Bk_BkzCo7CgewgB4hB4mBkD8Gwb8f4N0PvHgF7QwHUgK8H8E",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "68788d7d-cc48-4519-88f7-70ca8e0704a5",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:16:41+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9559558,
                                "lng": -2.6264316
                            },
                            "originalLocation": {
                                "lat": 42.9558924,
                                "lng": -2.6262415
                            },
                            "waypoint": 3
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:17:56+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9598566,
                                "lng": -2.6192578
                            },
                            "originalLocation": {
                                "lat": 42.9598551,
                                "lng": -2.6192525
                            },
                            "waypoint": 4
                        }
                    },
                    "summary": {
                        "duration": 75,
                        "length": 916,
                        "baseDuration": 75
                    },
                    "polyline": "BGor69xC_3pgF7H7ET_J8QvHwH_E0e4hB8V4XgK0KkIkDsO4NgU8V4NkS0K0PgK4NgUwgBsTkhBoL4X8G0P4NgoBgPs2BwH0e0K0yB0FsxBzUjIZP",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "b3102a77-cdce-4951-a4c8-baed9fa58afc",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:17:56+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9598566,
                                "lng": -2.6192578
                            },
                            "originalLocation": {
                                "lat": 42.9598551,
                                "lng": -2.6192525
                            },
                            "waypoint": 4
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:21:06+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.957183,
                                "lng": -2.6324721
                            },
                            "originalLocation": {
                                "lat": 42.9573153,
                                "lng": -2.6324468
                            },
                            "waypoint": 5
                        }
                    },
                    "summary": {
                        "duration": 190,
                        "length": 2019,
                        "baseDuration": 190
                    },
                    "polyline": "BGi_h-xCz37_EaQ0UkIzFrxBzKzyBvHze_Or2B3N_nB7GzPnL3XrTjhB_TvgB_J3NzKzP3NjS_T7VrO3NrE3I_JzK7VjXvR3SnLvMvR3S7a_dzFjD3hB3mB_dvgBjzCn7CwCnLoB_JsE79B4Iv6D88EsdgU4Do9B0K9C0c",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "15911dd9-b68c-4cf0-8568-b14b5da68a39",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:21:06+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.957183,
                                "lng": -2.6324721
                            },
                            "originalLocation": {
                                "lat": 42.9573153,
                                "lng": -2.6324468
                            },
                            "waypoint": 5
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:24:09+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9647753,
                                "lng": -2.6355463
                            },
                            "originalLocation": {
                                "lat": 42.9647771,
                                "lng": -2.6356325
                            },
                            "waypoint": 6
                        }
                    },
                    "summary": {
                        "duration": 183,
                        "length": 2122,
                        "baseDuration": 183
                    },
                    "polyline": "BG-389xCvx1gF-Czcn9BzK_T3D78Erd4Nr9F40E0UgeoBoaT4mBjDkN7BwgBvH8sC7V0ZnG8a_EwlBjDsiBnB4jFgF03BoB7BsiB7Bk6BpKL",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "6edd6d70-226b-4950-8b31-d1b153575119",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:24:09+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9647753,
                                "lng": -2.6355463
                            },
                            "originalLocation": {
                                "lat": 42.9647771,
                                "lng": -2.6356325
                            },
                            "waypoint": 6
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:27:00+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9605043,
                                "lng": -2.6279126
                            },
                            "originalLocation": {
                                "lat": 42.9605583,
                                "lng": -2.6280071
                            },
                            "waypoint": 7
                        }
                    },
                    "summary": {
                        "duration": 171,
                        "length": 1204,
                        "baseDuration": 171
                    },
                    "polyline": "BGuyr-xCzx7gFqKMjI01HjD8nC_EoyE3D4IjDsEnGgFzuD7QvtCnLniCjX_OkXwV-W",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "1a624a9f-4b22-4078-a65b-a65792e0fd53",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:27:00+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9605043,
                                "lng": -2.6279126
                            },
                            "originalLocation": {
                                "lat": 42.9605583,
                                "lng": -2.6280071
                            },
                            "waypoint": 7
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:31:22+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9700642,
                                "lng": -2.6258584
                            },
                            "originalLocation": {
                                "lat": 42.9700937,
                                "lng": -2.6258042
                            },
                            "waypoint": 8
                        }
                    },
                    "summary": {
                        "duration": 262,
                        "length": 1526,
                        "baseDuration": 262
                    },
                    "polyline": "BGwnj-xCx0sgFvV9WgPjXoiCkXwtCoL0uD8QgF4DkDsE4D4I7BopBkhB3IopBrO0ezPge_JkI3DwbnQ49CvgB0evMoGAoGkDsd4S8a4S0FoGkD4IvCw8Cre4e",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "a830de86-be67-4cd1-868f-e74132af3a1a",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:31:22+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9700642,
                                "lng": -2.6258584
                            },
                            "originalLocation": {
                                "lat": 42.9700937,
                                "lng": -2.6258042
                            },
                            "waypoint": 8
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:34:13+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9694499,
                                "lng": -2.61784
                            },
                            "originalLocation": {
                                "lat": 42.9693726,
                                "lng": -2.6178735
                            },
                            "waypoint": 9
                        }
                    },
                    "summary": {
                        "duration": 171,
                        "length": 887,
                        "baseDuration": 171
                    },
                    "polyline": "BGg91-xCj0ogFzT8TzFkIwHT89B4NoGgP0K8V0eo4B4DwM8BwRnBsTrEwRjI8QrJ8LvlBkmB7LoQzFkNv5B4rG",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "82d92005-8f32-4949-9ef4-0edf85fcdc2b",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:34:13+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9694499,
                                "lng": -2.61784
                            },
                            "originalLocation": {
                                "lat": 42.9693726,
                                "lng": -2.6178735
                            },
                            "waypoint": 9
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:37:46+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9649642,
                                "lng": -2.6309989
                            },
                            "originalLocation": {
                                "lat": 42.9650716,
                                "lng": -2.6309927
                            },
                            "waypoint": 10
                        }
                    },
                    "summary": {
                        "duration": 213,
                        "length": 1719,
                        "baseDuration": 213
                    },
                    "polyline": "BG020-xC_-4_EAA_nBzPzFTnGoBvRzFvC3DoB3ITzFvC3DvC7B7QzFvHA_T0F_EoGnLnGjmBrOvvBzPrsBjSvMrE7nCzZjI_EkmBrkFkD_TwCvWoLrzFkDv0B8BnpBU7QUjSgFnyEkD7nC0KoGf-f",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "cceec664-af97-4930-8a20-467bc82a364d",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:37:46+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9649642,
                                "lng": -2.6309989
                            },
                            "originalLocation": {
                                "lat": 42.9650716,
                                "lng": -2.6309927
                            },
                            "waypoint": 10
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:41:04+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9779439,
                                "lng": -2.6442627
                            },
                            "originalLocation": {
                                "lat": 42.9779654,
                                "lng": -2.6440662
                            },
                            "waypoint": 11
                        }
                    },
                    "summary": {
                        "duration": 198,
                        "length": 2377,
                        "baseDuration": 197
                    },
                    "polyline": "BGo-r-xCt1ygFgB9fzKnGkIz1H8Bj6B8BriBwMU8aUgeoB4wBoB0eoB0ZAgZ7B4NnB0UrEsY3IwW_J8VnQkXjSkXzUsT7V0UvbsEvHwHjNgKjSsd7zB0UzjBoVjcwMvRsErE4c3XwjC_2B0FrE4hBzZ4DjDgP3NwW_OkNnGokB7G80D3XoVjDUsOAsJrJoB_nB4DrFiB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "7c882837-f319-4b6a-a060-38d3aae86544",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:41:04+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9779439,
                                "lng": -2.6442627
                            },
                            "originalLocation": {
                                "lat": 42.9779654,
                                "lng": -2.6440662
                            },
                            "waypoint": 11
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:41:42+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9768831,
                                "lng": -2.6438627
                            },
                            "originalLocation": {
                                "lat": 42.9768597,
                                "lng": -2.6440819
                            },
                            "waypoint": 12
                        }
                    },
                    "summary": {
                        "duration": 38,
                        "length": 133,
                        "baseDuration": 38
                    },
                    "polyline": "BGwpl_xCtyshFziBiHnB4DAkIteiG",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "586d3773-0478-4cf3-806b-03f4a404378a",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:41:42+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9768831,
                                "lng": -2.6438627
                            },
                            "originalLocation": {
                                "lat": 42.9768597,
                                "lng": -2.6440819
                            },
                            "waypoint": 12
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:43:15+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9782353,
                                "lng": -2.64286
                            },
                            "originalLocation": {
                                "lat": 42.9782354,
                                "lng": -2.6430159
                            },
                            "waypoint": 13
                        }
                    },
                    "summary": {
                        "duration": 93,
                        "length": 290,
                        "baseDuration": 89
                    },
                    "polyline": "BGmnj_xCt5rhFxT-D3D4D7G4X4N8GsO8G0P4I4D8B0FkDoL0FgFwCkDjDgZnBkDA0KAuDA",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "e3cde969-6ba4-402d-a2ee-1fb92a833a4e",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:43:15+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9782353,
                                "lng": -2.64286
                            },
                            "originalLocation": {
                                "lat": 42.9782354,
                                "lng": -2.6430159
                            },
                            "waypoint": 13
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:45:05+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.979976,
                                "lng": -2.6436
                            },
                            "originalLocation": {
                                "lat": 42.9799201,
                                "lng": -2.6435984
                            },
                            "waypoint": 14
                        }
                    },
                    "summary": {
                        "duration": 110,
                        "length": 381,
                        "baseDuration": 106
                    },
                    "polyline": "BG27l_xC36phFinBAA3IArJTvRAjDTrTnBzjBgFAsOTkST4hBTU8VMwb",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "ab197d17-eeb3-4044-9c28-53c933c24d70",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:45:05+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.979976,
                                "lng": -2.6436
                            },
                            "originalLocation": {
                                "lat": 42.9799201,
                                "lng": -2.6435984
                            },
                            "waypoint": 14
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:46:46+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9799221,
                                "lng": -2.6422225
                            },
                            "originalLocation": {
                                "lat": 42.9799271,
                                "lng": -2.6422221
                            },
                            "waypoint": 15
                        }
                    },
                    "summary": {
                        "duration": 101,
                        "length": 245,
                        "baseDuration": 98
                    },
                    "polyline": "BGwop_xC_orhFIwRUwb0jBTjD8QTsO_T7BzPnBP0N",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "8f46c14f-b6a5-4c8e-8ef0-f60b67101b6b",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:46:46+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9799221,
                                "lng": -2.6422225
                            },
                            "originalLocation": {
                                "lat": 42.9799271,
                                "lng": -2.6422221
                            },
                            "waypoint": 15
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:47:26+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9814035,
                                "lng": -2.6422522
                            },
                            "originalLocation": {
                                "lat": 42.9814043,
                                "lng": -2.6422558
                            },
                            "waypoint": 16
                        }
                    },
                    "summary": {
                        "duration": 40,
                        "length": 183,
                        "baseDuration": 36
                    },
                    "polyline": "BGklp_xC7yohFQzN0PoBgU8BoawCwRkD0FoB0FoBwBQ",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "d63e15cd-9273-4ad8-bf40-fc7f262db62f",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:47:26+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9814035,
                                "lng": -2.6422522
                            },
                            "originalLocation": {
                                "lat": 42.9814043,
                                "lng": -2.6422558
                            },
                            "waypoint": 16
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:48:41+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9867959,
                                "lng": -2.6401096
                            },
                            "originalLocation": {
                                "lat": 42.9868529,
                                "lng": -2.6401184
                            },
                            "waypoint": 17
                        }
                    },
                    "summary": {
                        "duration": 75,
                        "length": 670,
                        "baseDuration": 74
                    },
                    "polyline": "BG4hs_xC30ohFkEsBwWgFwHoBopB4D8zB4DgUU4mB8BsJToQkD8VU0KoBofsJ8B0KoLoQ4S0UgPsToLgUkDoLMsE",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "463db8ce-5b4b-43bf-b411-c92748c190bd",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:48:41+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9867959,
                                "lng": -2.6401096
                            },
                            "originalLocation": {
                                "lat": 42.9868529,
                                "lng": -2.6401184
                            },
                            "waypoint": 17
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T14:59:37+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0359692,
                                "lng": -2.5715256
                            },
                            "originalLocation": {
                                "lat": 43.0359617,
                                "lng": -2.571497
                            },
                            "waypoint": 18
                        }
                    },
                    "summary": {
                        "duration": 656,
                        "length": 9913,
                        "baseDuration": 632
                    },
                    "polyline": "BG4y2_xC7ukhFLrEjDnLnL_T_OrT3SzU8GzU8QoGoL4DsT8G8LkD0FoB4InBwHvCkSnLkI3DwHA8GwCwHoGsdofkIoLwCgF0ew5BoGoLoGsJgKsJ4IoGsJ4D8LwCouBoGwMT4IvC4I_EoVjS4IrE4InB0KoB4IkDgKgF4IoGwH8GoG0KgF8LoGoa0F8QgFgKkI8LsJkIgK0F0wCokBkNwH4I8GwHsJoG8L0F4NoG8L0F4IwMgP4IwMoGkNsEsOsEwbkD4N0F0PoG8LkIwM4IgKgPwM8QsJsO8GgKwCsOkDoQwCsT8Bg7E0UsiBsE0UkD4NkDsJsE4I0FkIkIwHgKsnBslC4I4N0KkN8LgKkS8L4X4NkuCouB87Cs2BsnBwW8QgK8G0F0F8GsE4IkDgK8B0KrEwoCTgZoBgKkDsJgFgK8VkhB8GwHwH0F4IkD8iC4S8uBkN4I4DwHgFwHkIgFwHwH8QwHkc0KgtBsEwbUwMnBkN3DkS_To9BrEwWTsJ4DsY8L8pBkS89B4cs-C0Z0wCoQ03BsnBo5D0FwR0oBg4DoL0jBsE8VwlB0hHsdgtGkNs0CsE4XgFoVgKkhBkIkXwH8Q8GoL0tBs7BwRgZkcwqB4IgPoV4rB4N0ZwM8VwMsTgZsiBwvBsgC8G8G8G0F8GsEopB8Q8nC0eouB0U8Q4I8QoLgPoLo7C4pCsJsJwH4IoL8V0FgPsJof8BsJoBkNAgUvCw6DUgZoBgPwC0PkDgPsJ8fkDsJwMkmBsEgP8G0UUwCkNsnBsE8L0FoQwCgKUkInBgPjD8VnBwHnB8QUsJ8BkI4NwgBoB0FUwMjD4NzF0P7LgZnB8GUoGgFoQoL4cgFgKkD4D4D8BgFT4IrEwHvCkIAsJwCkIgFkNwMwH0FwH4DsY4IkI8B8L7BoL_EwH7BoGU8GkDsJoGwvB4hBofoQkIgF0F0FwH0K8BgFA0F7B8G7L4XjDsJnG4c7B8QrE8VjD4IrE4InLkS7GgPzFsYzF4NvRwR7BkDnB4DA4DoB4D8B8BkDU0FvCsE3D4SnVouB7zBkInL0FrJ4IjSsE3DgFnB0FoBkXkIoLkDsJ4DoQ4IoLsEoGUsTjD8V3D8GAsE8BkDgFoLnG0FzFkDnGoB7GA7Q8BjDkDTwCsE4D0KoQghCkDsEwR0KzK4XgK8GsOkDqEkC",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "4b88bd00-3006-4a3c-9c61-43bb45df4b81",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T14:59:37+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0359692,
                                "lng": -2.5715256
                            },
                            "originalLocation": {
                                "lat": 43.0359617,
                                "lng": -2.571497
                            },
                            "waypoint": 18
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:01:41+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0350982,
                                "lng": -2.564376
                            },
                            "originalLocation": {
                                "lat": 43.0349013,
                                "lng": -2.564474
                            },
                            "waypoint": 19
                        }
                    },
                    "summary": {
                        "duration": 124,
                        "length": 831,
                        "baseDuration": 124
                    },
                    "polyline": "BGi02iyCrw-8EpEjCrOjD_J7G7L0P7GoG3NwH3NoGjhBgKrJoG3DgFjDgKUkNgKwgBsT4hBwCoGoBoQnB0mC0F8VgFwC8BsEU8GrEgPU8G8BoGgP4SkDsJ8BwMTsOzF4NvCgKAkI4DwH4SgPA4NrE0UnDkM",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "bbfa0405-e302-4da9-9eae-20dd169dd9ed",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:01:41+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0350982,
                                "lng": -2.564376
                            },
                            "originalLocation": {
                                "lat": 43.0349013,
                                "lng": -2.564474
                            },
                            "waypoint": 19
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:03:46+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0405604,
                                "lng": -2.5654117
                            },
                            "originalLocation": {
                                "lat": 43.040573,
                                "lng": -2.5655514
                            },
                            "waypoint": 20
                        }
                    },
                    "summary": {
                        "duration": 125,
                        "length": 1348,
                        "baseDuration": 124
                    },
                    "polyline": "BG090iyCvxw8EoDjMsEzUA3N3S_O3DvHAjIwC_J0F3NUrO7BvMjDrJ_O3S7BnGT7GsE_OT7G7BrE_EvC0FnVsEjIgFnGwHvH0FvH4DnG8G_O4DzF0F3DwHjD4IAoGwC0FgF4N4S8Qoa0K4XoLsnBgF8LgFsJofwvBwMoQ8G0KsE4IwH0UkIoa4I4hBoGkXsEwHsEgFsEkDgF8BsETgF3DkDrEwCzFwCrJoB_JoBnVwC7G4DzFwH7G8LjI0K7GsTzK0K7G4SvMgFvC4IvC4IAkDQ",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "3632e411-74eb-4c1c-9420-f4c392038cba",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:03:46+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0405604,
                                "lng": -2.5654117
                            },
                            "originalLocation": {
                                "lat": 43.040573,
                                "lng": -2.5655514
                            },
                            "waypoint": 20
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:08:06+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0410102,
                                "lng": -2.5571029
                            },
                            "originalLocation": {
                                "lat": 43.0410101,
                                "lng": -2.557105
                            },
                            "waypoint": 21
                        }
                    },
                    "summary": {
                        "duration": 260,
                        "length": 2285,
                        "baseDuration": 258
                    },
                    "polyline": "BGgz_iyCnyy8EkIsB8VoG8LwC8LU0KToLU4N8BoaoG4SoGkI8BkDAsEU4InBwHvC8iCrdwMrEwMjDgKnBwHnBoQA4NoB0U4DkSkDkc0FkcgFoV4DkNwCUoG4DsJ4IkD41BoG4I8B8G4D8BgFAkIvHwH3ckNrEkDvCoGvCgKnBoLoBwgB_J4XzPof7L4NrEwCzFA3DnBrJ3InL3InLwC3NoGvH4I7GkNnBsJoLoV8GsJoBwHnBkST0ZUkcnB4I7BsEzFsE3N8B_EwHrEsJ7BkI_Y4Nze4IvH0F_iBkhB3NgPrYgjBrJsJjSgPjNwH3IoB_TvC_OnB7QU7GoBvMgFjNwC7GvCvHvMvH3D_T4DzFO",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "fa7c504f-fb6d-4dd5-a990-ee511fdb55ac",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:08:06+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0410102,
                                "lng": -2.5571029
                            },
                            "originalLocation": {
                                "lat": 43.0410101,
                                "lng": -2.557105
                            },
                            "waypoint": 21
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:09:35+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0479529,
                                "lng": -2.5584171
                            },
                            "originalLocation": {
                                "lat": 43.0479105,
                                "lng": -2.5583376
                            },
                            "waypoint": 22
                        }
                    },
                    "summary": {
                        "duration": 89,
                        "length": 859,
                        "baseDuration": 89
                    },
                    "polyline": "BGkvgjyC9qi8E0FNgU3DwH4DwHwM8GwCkNvCwM_E8GnB8QTgPoBgUwC4InBkNvHkS_OsJrJsY_iB4N_OgjBjhBwHzF0e3IgZ3NsJnBoQwH8V0KsEsEsJsJoQsOsEwCsTjD8GwCoGsEiCiC",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "9f4360bc-c055-4f5c-bdd8-9c536cf866d9",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:09:35+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0479529,
                                "lng": -2.5584171
                            },
                            "originalLocation": {
                                "lat": 43.0479105,
                                "lng": -2.5583376
                            },
                            "waypoint": 22
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:10:04+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0460899,
                                "lng": -2.55927
                            },
                            "originalLocation": {
                                "lat": 43.0460302,
                                "lng": -2.5592411
                            },
                            "waypoint": 23
                        }
                    },
                    "summary": {
                        "duration": 29,
                        "length": 226,
                        "baseDuration": 29
                    },
                    "polyline": "BGihujyCh9k8EhChCnGrE7GvCrTkDrEvCnQrOrJrJrErE7VzKnQvHrJoB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "d0f58ce0-f8bf-4118-a433-1fedcbac414c",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:10:04+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0460899,
                                "lng": -2.55927
                            },
                            "originalLocation": {
                                "lat": 43.0460302,
                                "lng": -2.5592411
                            },
                            "waypoint": 23
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:11:48+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0392296,
                                "lng": -2.5534165
                            },
                            "originalLocation": {
                                "lat": 43.0392246,
                                "lng": -2.5534269
                            },
                            "waypoint": 24
                        }
                    },
                    "summary": {
                        "duration": 104,
                        "length": 1004,
                        "baseDuration": 104
                    },
                    "polyline": "BG0sqjyCrym8EAA_Y4Nze4IvH0F_iBkhB3NgPrYgjBrJsJjSgPjNwH3IoB_TvC_OnB7QU7GoBvMgFjNwC7GvCvHvMvH3DnL8fzFwMvWopB3SgoBnG4IzF0Fv0BsdrE0FnBoGA4hB7BgKjDoG3DsD",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "a5155aa4-7686-4d62-ab18-1da75d6a2882",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:11:48+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0392296,
                                "lng": -2.5534165
                            },
                            "originalLocation": {
                                "lat": 43.0392246,
                                "lng": -2.5534269
                            },
                            "waypoint": 24
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:12:02+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0379799,
                                "lng": -2.5522701
                            },
                            "originalLocation": {
                                "lat": 43.0378737,
                                "lng": -2.5523567
                            },
                            "waypoint": 25
                        }
                    },
                    "summary": {
                        "duration": 14,
                        "length": 170,
                        "baseDuration": 14
                    },
                    "polyline": "BG8_8iyCvk77ErY0V_YgU_O8V3D4D_JsE",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "e7fb8a0a-0a3b-4e78-9cde-3ebf25ec186c",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:12:02+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0379799,
                                "lng": -2.5522701
                            },
                            "originalLocation": {
                                "lat": 43.0378737,
                                "lng": -2.5523567
                            },
                            "waypoint": 25
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:15:02+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0413555,
                                "lng": -2.5404234
                            },
                            "originalLocation": {
                                "lat": 43.0414004,
                                "lng": -2.5404819
                            },
                            "waypoint": 26
                        }
                    },
                    "summary": {
                        "duration": 180,
                        "length": 2139,
                        "baseDuration": 180
                    },
                    "polyline": "BG4x6iyC7847EAArEkDrEsE7LkXrJ4NnGgF3IsE7iCoV7GnB3IjD3X7V7LnG7GUnGoGjIkSvH4XrJ0U_EoG3N4InVkIrJsJ7BgFT0FwC4IgU0jBUwH7B4IvC4DriB8fjN4I3hBwM7GsErEwHnBoGnBkIAoG4DgK0K4S4DsE4D8Bg6C0FwWgKgFU8VjD0PAkNwC0KgFsJwH8G4IgKkS0PsnB4DoL8GoG4IkD4cgFgKgFgKoLwW8fkNgPwM8LgF8BwHoBopB7GwWnBgUrE0FwC0FoLsYonCokB8vD4D8GkI4I0BqC",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "cdb169bf-e56f-403d-8fc2-7fd36f164af3",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:15:02+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0413555,
                                "lng": -2.5404234
                            },
                            "originalLocation": {
                                "lat": 43.0414004,
                                "lng": -2.5404819
                            },
                            "waypoint": 26
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:15:54+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0421899,
                                "lng": -2.53791
                            },
                            "originalLocation": {
                                "lat": 43.0421488,
                                "lng": -2.537881
                            },
                            "waypoint": 27
                        }
                    },
                    "summary": {
                        "duration": 52,
                        "length": 249,
                        "baseDuration": 52
                    },
                    "polyline": "BG4khjyCt4h7E4C-D4DkNAkInBwMA8VnBwH3DwHwCoGsEwRsEoLsEkIwR4N4S0Z",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "6ec9fc7e-6f5d-47ba-94da-b54e59a95345",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:15:54+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0421899,
                                "lng": -2.53791
                            },
                            "originalLocation": {
                                "lat": 43.0421488,
                                "lng": -2.537881
                            },
                            "waypoint": 27
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:17:26+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0482569,
                                "lng": -2.5392223
                            },
                            "originalLocation": {
                                "lat": 43.0482566,
                                "lng": -2.5392404
                            },
                            "waypoint": 28
                        }
                    },
                    "summary": {
                        "duration": 92,
                        "length": 962,
                        "baseDuration": 92
                    },
                    "polyline": "BG84ijyCr786EAA0ekI8GkD8GgF8L0UsEwCkI8BkrB3DwRAgUoBwMsEkIwH4N8Q4IkNsJoQsJoG0KAoGoB0FsEgFkI0FoV4DgKgFgFoGU8G7BwMvH4I7G8GzKoB_EA_JrE3rBUjI8GzU4DrTkDvHsJzP0FjNsTzjB8B7G8GvCwbzU-CD",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "1c2b91de-cae5-406a-b8a8-ed7f4073c0de",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:17:26+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0482569,
                                "lng": -2.5392223
                            },
                            "originalLocation": {
                                "lat": 43.0482566,
                                "lng": -2.5392404
                            },
                            "waypoint": 28
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:23:15+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0532047,
                                "lng": -2.563423
                            },
                            "originalLocation": {
                                "lat": 43.0532421,
                                "lng": -2.5635074
                            },
                            "waypoint": 29
                        }
                    },
                    "summary": {
                        "duration": 349,
                        "length": 4068,
                        "baseDuration": 338
                    },
                    "polyline": "BGi0ujyCrt_6E9CEvb0U7GwC7B3IrEvM7BjInBnLUnLwC7LgUj1B4DjXgFvHsErEwHrEsE3DkN7agFnGgFjDoGnBkNAgFjDoa7uBkIjIgKjDsJU8G8BssBjIgK3XoG_J8G7GgF3DwWrEsJrEsOjDgPnB8LoB4vEs2B8LkIokBkhBgP0P4IsE0P4DkSkD0K4IoGkIsEkIwC8LwC8VwCgKgF8GsE4DwMUoG8BwC8B8QgZkDwCgKwC8LoBwMjD0PvCU_O8BjI8BnGgFnL4I3Nwb3hB0PjS8GrJ0FrJkIvR0FvRkD3NwCvRUzPvCj_BjD3XzFnanLrsBvC3SUjI8B3I4N3rB8BvRTjIvC3I3DvHnG7GnLrJvHvH3DzFjDnG7B7GTnQsEvbsE3S0FnQwHvRkIrOgPnV0KvM8GrJkDzFwCnGoB7GAnG7BvHvCzF3DrEnGrErxBvWrJ_EnGzF_E7GvMzZrE7GrJrJ_EvCzZ3IrJrErJzFjIvHjN_OnG3InG_J7V7pBnGjI7G7GjIrE7G7B_ToB7GTzFvCrEjDrErE3D_E3D7GjD3IjSn2C3S_5CzFna3IvvB_Jv5BrJ3wBAnQrEvb_E3N3DjI7G7LnGjIlvB9mB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "3ac43371-c54d-426f-8ca3-5a53ddf3a78a",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:23:15+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0532047,
                                "lng": -2.563423
                            },
                            "originalLocation": {
                                "lat": 43.0532421,
                                "lng": -2.5635074
                            },
                            "waypoint": 29
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:23:44+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0521999,
                                "lng": -2.56477
                            },
                            "originalLocation": {
                                "lat": 43.0522041,
                                "lng": -2.5648469
                            },
                            "waypoint": 30
                        }
                    },
                    "summary": {
                        "duration": 29,
                        "length": 164,
                        "baseDuration": 29
                    },
                    "polyline": "BGqp4jyC91u8EtNhL_E_EzK_J3NjNzF7G3DjI7GnVU_EnB7BjD7B",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "3d0aaf00-2fd7-451b-97b7-643ec6fad6b0",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:23:44+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0521999,
                                "lng": -2.56477
                            },
                            "originalLocation": {
                                "lat": 43.0522041,
                                "lng": -2.5648469
                            },
                            "waypoint": 30
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:24:33+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0510219,
                                "lng": -2.5657674
                            },
                            "originalLocation": {
                                "lat": 43.0510312,
                                "lng": -2.5658461
                            },
                            "waypoint": 31
                        }
                    },
                    "summary": {
                        "duration": 49,
                        "length": 226,
                        "baseDuration": 49
                    },
                    "polyline": "BGwq2jyCjqx8E7BUzFjIgFzoB8BA8B7BU3DA7BnBvC7BTjDA7BoBTwCzFTrnB7B3V5E",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "c39887d4-f839-46b0-be6f-cbe01272f2e1",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:24:33+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0510219,
                                "lng": -2.5657674
                            },
                            "originalLocation": {
                                "lat": 43.0510312,
                                "lng": -2.5658461
                            },
                            "waypoint": 31
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:25:45+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0488169,
                                "lng": -2.5664554
                            },
                            "originalLocation": {
                                "lat": 43.0489243,
                                "lng": -2.5663937
                            },
                            "waypoint": 32
                        }
                    },
                    "summary": {
                        "duration": 72,
                        "length": 354,
                        "baseDuration": 72
                    },
                    "polyline": "BG8g0jyCtoz8EnXlFjN_E7LrJ3DU3DwCjD8GzF8a3X_ErsBnLjNjD8GvlBiBtD",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "33e67c24-3573-4b7b-9e5c-843fad2d8529",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:25:45+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0488169,
                                "lng": -2.5664554
                            },
                            "originalLocation": {
                                "lat": 43.0489243,
                                "lng": -2.5663937
                            },
                            "waypoint": 32
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:26:14+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0477565,
                                "lng": -2.5659392
                            },
                            "originalLocation": {
                                "lat": 43.0477521,
                                "lng": -2.5659146
                            },
                            "waypoint": 33
                        }
                    },
                    "summary": {
                        "duration": 29,
                        "length": 159,
                        "baseDuration": 29
                    },
                    "polyline": "BGi3vjyCtz08EhBuD7GwlBvgBnG7QU9IhD",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "3f35e835-32e3-414d-a0ba-51ee96f20861",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:26:14+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0477565,
                                "lng": -2.5659392
                            },
                            "originalLocation": {
                                "lat": 43.0477521,
                                "lng": -2.5659146
                            },
                            "waypoint": 33
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:26:49+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0462678,
                                "lng": -2.5666191
                            },
                            "originalLocation": {
                                "lat": 43.0462868,
                                "lng": -2.5667161
                            },
                            "waypoint": 34
                        }
                    },
                    "summary": {
                        "duration": 35,
                        "length": 230,
                        "baseDuration": 35
                    },
                    "polyline": "BG60tjyClzz8E1Q1F36BrJ_TnQ7L7L4DjDwK6D",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "6bd64b6d-4db0-4e01-a7fa-178beee2a84c",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:26:49+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0462678,
                                "lng": -2.5666191
                            },
                            "originalLocation": {
                                "lat": 43.0462868,
                                "lng": -2.5667161
                            },
                            "waypoint": 34
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:28:22+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.04999,
                                "lng": -2.56549
                            },
                            "originalLocation": {
                                "lat": 43.0500678,
                                "lng": -2.565496
                            },
                            "waypoint": 35
                        }
                    },
                    "summary": {
                        "duration": 93,
                        "length": 482,
                        "baseDuration": 93
                    },
                    "polyline": "BG43qjyC1908EvK5D3DkD8L8LgUoQ46BsJ0Z4I8QTwgBoGkNkDssBoL4XgF",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "9b3e6c16-abbd-4357-8e63-1224925546f9",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:28:22+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.04999,
                                "lng": -2.56549
                            },
                            "originalLocation": {
                                "lat": 43.0500678,
                                "lng": -2.565496
                            },
                            "waypoint": 35
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:30:12+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0529922,
                                "lng": -2.5660793
                            },
                            "originalLocation": {
                                "lat": 43.0529723,
                                "lng": -2.5660837
                            },
                            "waypoint": 36
                        }
                    },
                    "summary": {
                        "duration": 110,
                        "length": 484,
                        "baseDuration": 110
                    },
                    "polyline": "BGsgyjyCj3y8EAAkmBgUgF8B0PoGwb8GkIUwMT4XwC0FkInBwCT4DoBwCwCoB8BA8B7BU_EnB7BsE7B0U4IkDjIgF_JoB7G4ITsE7BoBrOzF7VT3IUzKkDnGElB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "235a1936-5774-4e69-b155-5a635f829b89",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:30:12+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0529922,
                                "lng": -2.5660793
                            },
                            "originalLocation": {
                                "lat": 43.0529723,
                                "lng": -2.5660837
                            },
                            "waypoint": 36
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:30:43+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0535661,
                                "lng": -2.5673789
                            },
                            "originalLocation": {
                                "lat": 43.0535713,
                                "lng": -2.5673757
                            },
                            "waypoint": 37
                        }
                    },
                    "summary": {
                        "duration": 31,
                        "length": 131,
                        "baseDuration": 31
                    },
                    "polyline": "BGg83jyC97z8E4B5NTzK0FzP4I_TsTjSgBhD",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "cbb013fc-436b-4e24-8bd9-0952f1b7b266",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:30:43+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0535661,
                                "lng": -2.5673789
                            },
                            "originalLocation": {
                                "lat": 43.0535713,
                                "lng": -2.5673757
                            },
                            "waypoint": 37
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:32:55+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.05733,
                                "lng": -2.5647
                            },
                            "originalLocation": {
                                "lat": 43.0574245,
                                "lng": -2.5648002
                            },
                            "waypoint": 38
                        }
                    },
                    "summary": {
                        "duration": 132,
                        "length": 1365,
                        "baseDuration": 132
                    },
                    "polyline": "BG8_4jyClt28EsDhK8GjrBkDzKwMzU8GrOwCrOkDzK0KjNwMjNwHjD4I8BsOkIopB8aoGUgFvCoagZsdkrBwH4I8QkI8V8G4SsE8LsOwlBoaoV4IsnBoVoGwCkD0FoBoGAoGjD0FnVnBrY3D7ajIvH8BjhB8QnL_E7QkDrEAzF7G_E3DrEArE4DzFsJvCkSvC8LoB0KoGoQoGoLsOkS",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "6cd3d406-e706-4110-a2ad-d7d6c7fd979d",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:32:55+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.05733,
                                "lng": -2.5647
                            },
                            "originalLocation": {
                                "lat": 43.0574245,
                                "lng": -2.5648002
                            },
                            "waypoint": 38
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:38:04+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.05009,
                                "lng": -2.57309
                            },
                            "originalLocation": {
                                "lat": 43.0500955,
                                "lng": -2.5730227
                            },
                            "waypoint": 39
                        }
                    },
                    "summary": {
                        "duration": 309,
                        "length": 3136,
                        "baseDuration": 309
                    },
                    "polyline": "BGkrgkyC3lx8ErOjSnGnLnGnQnBzKwC7LwCjS0FrJsE3DsEAgF4D0F8GsEA8QjDoLgFkhB7QwH7B8akIsY4DoVoBkDzFAnGnBnGjDzFnGvCrnBnVnV3IvlBna7LrO3SrE7V7G7QjIvH3IrdjrBna_Y_EwCnGTnpB7arOjI3I7BvHkDzZ_iB_J3DjIwCzK8G3D0F_EgK_E0F_EUwM7a0U_d4DvHkI7pB8GjXkI7QokBvlBsT3XkXjc4DjIwCnLUzKAnL_EztB7BzevC_O3Ize3DnpB_T_JvHzF_E3NnL_Y_E7G_dnQrEU3DsET4IsOkc8G8GgFsJgFkN8GsiBsEouBTof3D4X7G4NnLsOjIsYvMwWzUsTjI8B_EA7GkD3I8GvHsJrO8V3N0PjI8BvHnBrE_EjDrOrE7kB3D7LrJnLrOvCnLwC7L8G3X4X_E4DjIAjXjI7GT3DwCvH4I",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "b5272ac9-007a-4be3-b92b-7a129be8bbd4",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:38:04+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.05009,
                                "lng": -2.57309
                            },
                            "originalLocation": {
                                "lat": 43.0500955,
                                "lng": -2.5730227
                            },
                            "waypoint": 39
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:43:38+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0647504,
                                "lng": -2.5847732
                            },
                            "originalLocation": {
                                "lat": 43.0648279,
                                "lng": -2.5847074
                            },
                            "waypoint": 40
                        }
                    },
                    "summary": {
                        "duration": 334,
                        "length": 3497,
                        "baseDuration": 334
                    },
                    "polyline": "BG0myjyCjyh9EwH3I4DvC8GUkXkIkIAgF3D4X3X8L7GoLvCsOwCsJoL4D8LsE8kBkDsOsEgFwHoBkI7B4NzPsO7VwHrJ4I7G8GjDgFAkI7B0UrTwMvWkIrYoLrO8G3N4D3XUnfrEnuB7GriB_EjN_ErJ7G7GrOjcU3I4DrEsETgeoQgF8GoLgZgF4NwH0FgUgKwC7G4DnB4DoBsEsEsEgKkDgPgF0PkX4rBgF8LwHkX4DwHgFsE8GUoL3IgK_OoL_iBUjSjDzPrE7GvH7G3D7GnBjIT_OvC_JnVnzBnB3IU3SwCrYwCrO3D_YoB7GwC3DsEnBgFwCoVgZ0KgPsEsE0UoLwH0F4IwHsJ8LgPkN4NkI0PkD8GT0FjD0e_dwHrJsEzKkInf4D3IgFjDsEnB0PgFkIoBwHvCgUjS4D7GoBjI7BjIvCrE7GnGjNrEzF3DjDrEjDvHnG7f_J_dnBzKoB_YjD3SoB3N4DnG0PvR8GvRsJ7f4D_Y7B_O_EzKkInG8L3DkpCA8G7BoG7GwMjSsEnB4DUgZgKoGAoG7BwbvRwRnL8GTgFwC0FwMkD0PwCkSsEkNwHwMoG8GsEoBgFvCkIzZUtB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "fe926d44-5abf-4463-977c-359d96e53756",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:43:38+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0647504,
                                "lng": -2.5847732
                            },
                            "originalLocation": {
                                "lat": 43.0648279,
                                "lng": -2.5847074
                            },
                            "waypoint": 40
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:47:36+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0580496,
                                "lng": -2.5899663
                            },
                            "originalLocation": {
                                "lat": 43.0580231,
                                "lng": -2.5899042
                            },
                            "waypoint": 41
                        }
                    },
                    "summary": {
                        "duration": 238,
                        "length": 2366,
                        "baseDuration": 238
                    },
                    "polyline": "BG86ukyCps49ETuBjI0Z_EwCrEnBnG7GvHvMrEjNvCjSjDzPzFvM_EvC7GUvRoLvbwRnG8BnGA_Y_J3DTrEoBvMkSnG8G7G8BjpCA7L4DjIoGrE8G_EwMzFofrEgKjI0K7L4IzPwHjIkIrEsEzF4IzF8QjDgFvH0FzZ0K_JUzFjDjcnV_EvH3DvH3DrJ7BnLvH7LjX3c_Tjc7LrJzK7B_E8BrYoV3IsJrEoBjInBvRvM3N7B7VzK_O7L3N3NzFrJ3N3mB3DjDrE7BzKUzFzF3DnGge7BgF8B4NoVoGwHoQ4IgZgKwHvCsJ_JkXz1C8GrJsY3NwbvWsE7GwC3ITrsBU_JwC3IsEvH0FrEwHjDwWnG8LnLkDrE3DjSwCzF8GnLArEsEzFgFA8BwB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "1553336e-2ef1-48b9-b6e7-501bd817abf3",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:47:36+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0580496,
                                "lng": -2.5899663
                            },
                            "originalLocation": {
                                "lat": 43.0580231,
                                "lng": -2.5899042
                            },
                            "waypoint": 41
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:51:07+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0483899,
                                "lng": -2.5824701
                            },
                            "originalLocation": {
                                "lat": 43.0483526,
                                "lng": -2.5826757
                            },
                            "waypoint": 42
                        }
                    },
                    "summary": {
                        "duration": 211,
                        "length": 2061,
                        "baseDuration": 211
                    },
                    "polyline": "BGk4hkyC7wi-EoBgB0F4IwRgeoBUvCkNvHnBzFzF3NvCjNTjDsE7LoLvWoGvHkDzFsErEwHvC4ITgKUssBvC4IrE8GvbwWrY4N7GsJjX01CrJgKvHwC_Y_JnQ3InGvH3NnV_E7B_d8B_TjhBvW3XvHrErEoBrEkDrEsErEsOnBkcvC0K_E0K3c4X3D0FnB0KkD8uBAwW7B4IrEwHzZ0U7LgFzU4DrJA_JvCjN7QzK_T_drsBvRnVrO3XrOnkBzFrJzFrEjDnB3DU3DoG7BkIjDkrBnB4SoB0tB8BokBnBgPnB0oBToLnBkDvH7B",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "28c38167-1130-40f3-ade9-f15587e008ae",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:51:07+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0483899,
                                "lng": -2.5824701
                            },
                            "originalLocation": {
                                "lat": 43.0483526,
                                "lng": -2.5826757
                            },
                            "waypoint": 42
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:52:09+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0447084,
                                "lng": -2.581521
                            },
                            "originalLocation": {
                                "lat": 43.0447115,
                                "lng": -2.581495
                            },
                            "waypoint": 43
                        }
                    },
                    "summary": {
                        "duration": 62,
                        "length": 580,
                        "baseDuration": 62
                    },
                    "polyline": "BGs8ujyCr8z9EwH8BTkDvCgFvMgPvC0FnG0U7LwH3SsJ7LUzFvC3InGU_J7B7GjS_sBzFnLnGvH_E7BzFoBvHkIrTgPnQkSrO4S_JoLjIsEvMwC3X8BzCS",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "0c6a706c-cdc5-4163-b9f4-1a89d1fddcdf",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:52:09+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0447084,
                                "lng": -2.581521
                            },
                            "originalLocation": {
                                "lat": 43.0447115,
                                "lng": -2.581495
                            },
                            "waypoint": 43
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:54:16+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0387641,
                                "lng": -2.57859
                            },
                            "originalLocation": {
                                "lat": 43.0387642,
                                "lng": -2.5784898
                            },
                            "waypoint": 44
                        }
                    },
                    "summary": {
                        "duration": 127,
                        "length": 1257,
                        "baseDuration": 127
                    },
                    "polyline": "BGo2njyChhy9EzI-B3SoLnL8GnGwCjNU3InBjDnBjD3DnBzFA_JnBrOjD3SoBjhBnB7QrJzoBnBjS4IjpCT3I7B7GrEnG_ErEnLvC7GkD3D0F3c44C3DkI_JkNjuCk4CzZoanQgUze0hCzPgevCwH_E8GjIoGnGsJ7G0PvHsYvCsEjD8B_EUzBA",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "5e50c4ef-4db0-4457-a629-9bcc1f232ed6",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:54:16+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0387641,
                                "lng": -2.57859
                            },
                            "originalLocation": {
                                "lat": 43.0387642,
                                "lng": -2.5784898
                            },
                            "waypoint": 44
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T15:55:16+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0396062,
                                "lng": -2.5758455
                            },
                            "originalLocation": {
                                "lat": 43.0397501,
                                "lng": -2.575778
                            },
                            "waypoint": 45
                        }
                    },
                    "summary": {
                        "duration": 60,
                        "length": 380,
                        "baseDuration": 60
                    },
                    "polyline": "BG4i8iyC7ps9EjMAjDsEvCoG4IsEwH8G0F8G0FoLoG0ZsEoG0U8Q0ZgK8GwH4D8GkDkIgFgUnLkDvHkI3IoG3D8GvB8F",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "32d067a9-4602-4d8d-a480-262ef76f9f90",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T15:55:16+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0396062,
                                "lng": -2.5758455
                            },
                            "originalLocation": {
                                "lat": 43.0397501,
                                "lng": -2.575778
                            },
                            "waypoint": 45
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:01:55+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0138795,
                                "lng": -2.6113956
                            },
                            "originalLocation": {
                                "lat": 43.0138495,
                                "lng": -2.6113773
                            },
                            "waypoint": 46
                        }
                    },
                    "summary": {
                        "duration": 399,
                        "length": 5908,
                        "baseDuration": 391
                    },
                    "polyline": "BGs39iyCr-m9EfkEAoLwCwHoGsJsEwCsEUwCgPTsT7BsJ7G8QnkBgrCnfs0CnGsTzFoL7G0K7GkI_OsO7f0PjDUvCAvMjIvR7LvgB3crT3S3DvHvMvRnL3IvRzKjDrEnQ_gC3DzKvCrEjDU7BkDA8QnB8GjDoGzF0FnLoGjD_ErE7B7GA7V4DrTkDnGTnLrEnQ3IrJ3DnLjDjXjIzFnB_EoBrE4D3IkSzFsJjIoLnuB8zB3SoVrE4DzFwCjDT7B7BnB3DA3DoB3D8BjDwRvR0F3N0FrY8G_OoLjSsE3IkD3IsE7V8B7QoG3ckDrJ8L3X8B7GAzF7B_EvHzKzFzFjI_EnfnQvvB3hBrJnG7GjDnGTvH8BnLgF7L8BjI7BrY3IvH3DvHzFjNvMjI_ErJvCjIAvHwC3IsE_EU3D7BjD3D_E_JnL3c_EnQTnGoB7G8L_Y0FzPkD3NTvMnBzF3NvgB7BjITrJoB7QoBvHkD7VoB_OTjIvC_JzFnQrE7LjNrnBTvC7GzUrE_OvMjmBjDrJrJ7fjD_OvCzPnB_OT_YwCv6DA_TnBjN7BrJrJnfzF_OnL7VvH3IrJrJn7C3pC_OnL7QnL7Q3InuBzU7nCzenpB7Q7GrE7GzF7G7GvvBrgC_YriBvMrTvM7V3NzZnV3rB3I_OjcvqBvR_YztBr7B7GnLvH7QjIjX_JjhB_EnVrE3XjNr0Crd_sGvlBzhHrE7VnLzjBzoB_3DvC7H",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "2102a8ef-a8cb-4f6d-8d4f-2da99fc756c5",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:01:55+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 43.0138795,
                                "lng": -2.6113956
                            },
                            "originalLocation": {
                                "lat": 43.0138495,
                                "lng": -2.6113773
                            },
                            "waypoint": 46
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:06:21+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.98531,
                                "lng": -2.6419
                            },
                            "originalLocation": {
                                "lat": 42.9852955,
                                "lng": -2.6418274
                            },
                            "waypoint": 47
                        }
                    },
                    "summary": {
                        "duration": 266,
                        "length": 4653,
                        "baseDuration": 251
                    },
                    "polyline": "BGwvrhyCnss_EjDzJrnBn5DnQz3BzZzwC3cr-CjS79B7L7pB3DrYUrJsEvWgUn9B4DjSoBjNTvMrEvbzK_sBvHjcvH7Q_EvHvHjIvH_E3I3D7uBjN7iC3S3IjDvHzF7GvH7VjhB_E_JjDrJnB_JU_YsEvoC7BzKjD_JrE3IzF7G7GzF7Q_JrnBvW77Cr2BjuCnuB3X3NjS7L7L_JzKjN3I3NrnBrlCvH_JjIjI3IzFrJrE3NjDzUjDriBrE_6EzUrT7BnQvCrOjD_JvCrO7G7QrJ_OvM3I_JjIvMnG7LzFzPjD3NrEvbrErOnGjN3IvMvM_OzF3InG7LzF3NnG7LvHrJ3I7GjNvHzwCnkB_JzFrJjIjI7L_E_JzF7QnGna_E7LnGzKvH7G3InG_J_E3IjDzKnB3IoB3IsEnVkS3IgF3IwCvMUnuBnG7LvCrJ3D3InG_JrJnGrJnGnLzev5BvC_EjInLrdnfvHnG7GvCvHAjI4DjSoLvHwC3IoBzFnB7LjDrT7GnL3D7QnG_TnGnfrJ",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "5ef5dc18-2b05-4de2-b212-ac2efd4680ef",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:06:21+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.98531,
                                "lng": -2.6419
                            },
                            "originalLocation": {
                                "lat": 42.9852955,
                                "lng": -2.6418274
                            },
                            "waypoint": 47
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:07:11+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.983689,
                                "lng": -2.6414514
                            },
                            "originalLocation": {
                                "lat": 42.9836919,
                                "lng": -2.6414265
                            },
                            "waypoint": 48
                        }
                    },
                    "summary": {
                        "duration": 50,
                        "length": 196,
                        "baseDuration": 50
                    },
                    "polyline": "BG81z_xC3-nhFAAzKnBTgK3XoLrJwCnL8B7QUnawCxCS",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "0f99e378-1669-4e65-ab68-37e622b7e4fb",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:07:11+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.983689,
                                "lng": -2.6414514
                            },
                            "originalLocation": {
                                "lat": 42.9836919,
                                "lng": -2.6414265
                            },
                            "waypoint": 48
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:07:59+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9828642,
                                "lng": -2.6420517
                            },
                            "originalLocation": {
                                "lat": 42.9828626,
                                "lng": -2.6420071
                            },
                            "waypoint": 49
                        }
                    },
                    "summary": {
                        "duration": 48,
                        "length": 175,
                        "baseDuration": 48
                    },
                    "polyline": "BGyww_xC1inhFlGqB7LgKrO7V3DrE3D3D7V3NzFnG8PkB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "f2eec486-fec2-47a4-ac70-174e303aedd8",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:07:59+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9828642,
                                "lng": -2.6420517
                            },
                            "originalLocation": {
                                "lat": 42.9828626,
                                "lng": -2.6420071
                            },
                            "waypoint": 49
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:10:08+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.98066,
                                "lng": -2.64452
                            },
                            "originalLocation": {
                                "lat": 42.9806625,
                                "lng": -2.6445697
                            },
                            "waypoint": 50
                        }
                    },
                    "summary": {
                        "duration": 129,
                        "length": 1025,
                        "baseDuration": 122
                    },
                    "polyline": "BGg9u_xCnoohFgkB0CgUU4mB8BsJTwRrE0jBvMrE8VzKnB7VTnQjDrJU3mB7B_TT7zB3DnpB3DvHnBvW_EzF7BzFnBzFnBvRjDnavCUrOkD7Q4DnaUjI8BnuBUnQT_E",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "71afa707-f366-443a-bbf5-f9d0b8f6a7a1",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:10:08+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.98066,
                                "lng": -2.64452
                            },
                            "originalLocation": {
                                "lat": 42.9806625,
                                "lng": -2.6445697
                            },
                            "waypoint": 50
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:11:22+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.97881,
                                "lng": -2.6447401
                            },
                            "originalLocation": {
                                "lat": 42.978893,
                                "lng": -2.6446496
                            },
                            "waypoint": 51
                        }
                    },
                    "summary": {
                        "duration": 74,
                        "length": 237,
                        "baseDuration": 73
                    },
                    "polyline": "BGozq_xCvithFAA3DA_nBkI3hBUjSUrOU_EAArJTrO",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "8dc75798-08ac-42ee-8ea6-011aafd0736c",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:11:22+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.97881,
                                "lng": -2.6447401
                            },
                            "originalLocation": {
                                "lat": 42.978893,
                                "lng": -2.6446496
                            },
                            "waypoint": 51
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:14:07+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.97212,
                                "lng": -2.6465101
                            },
                            "originalLocation": {
                                "lat": 42.9721298,
                                "lng": -2.6465055
                            },
                            "waypoint": 52
                        }
                    },
                    "summary": {
                        "duration": 165,
                        "length": 845,
                        "baseDuration": 165
                    },
                    "polyline": "BG0_m_xCnwthFAAnVkD70D4XnkB8GjNoGvWgP7ajSgF_JrOvWrJ7L3NnLjIjDjNvC_iB_E_TnGrJ7GnGjI_JrT3D3IrE_E3mB7a",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "4ce5a522-aae4-476d-acbc-7d2ed47edbb1",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:14:07+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.97212,
                                "lng": -2.6465101
                            },
                            "originalLocation": {
                                "lat": 42.9721298,
                                "lng": -2.6465055
                            },
                            "waypoint": 52
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:15:49+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9698943,
                                "lng": -2.650827
                            },
                            "originalLocation": {
                                "lat": 42.9698961,
                                "lng": -2.6508016
                            },
                            "waypoint": 53
                        }
                    },
                    "summary": {
                        "duration": 102,
                        "length": 577,
                        "baseDuration": 102
                    },
                    "polyline": "BGw95-xC7-whFAAzKvqBjD_EzjB3crnBjXze_OrxBrE7BUoB_doB_J8LzyBwCzUsJ3mB8BnBsDN",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "ad916d2a-dc11-4fb5-b553-dc1f920bd2ed",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:15:49+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9698943,
                                "lng": -2.650827
                            },
                            "originalLocation": {
                                "lat": 42.9698961,
                                "lng": -2.6508016
                            },
                            "waypoint": 53
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:18:02+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9689374,
                                "lng": -2.6464881
                            },
                            "originalLocation": {
                                "lat": 42.968724,
                                "lng": -2.6466998
                            },
                            "waypoint": 54
                        }
                    },
                    "summary": {
                        "duration": 133,
                        "length": 732,
                        "baseDuration": 133
                    },
                    "polyline": "BGsy1-xC1s5hFrDO7BoBrJ4mBvC0U7L0yBnBgKnBgevCUnG8G_E7BvCAvC8BnBwCnB4DA4DU4D8BsEkD8BkDAwCnBwCvC8BrEsgC4hBoV4NzFwgB3DwCrEUzF3DnGjD7VvMzZrOjDA7LwRjNgUhHoN",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "dc569425-59e0-4dca-babc-f03e8671a66f",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:18:02+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9689374,
                                "lng": -2.6464881
                            },
                            "originalLocation": {
                                "lat": 42.968724,
                                "lng": -2.6466998
                            },
                            "waypoint": 54
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:21:11+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9751514,
                                "lng": -2.6440615
                            },
                            "originalLocation": {
                                "lat": 42.9751291,
                                "lng": -2.6439995
                            },
                            "waypoint": 55
                        }
                    },
                    "summary": {
                        "duration": 189,
                        "length": 964,
                        "baseDuration": 189
                    },
                    "polyline": "BGy2z-xCv9whF5TslBkIUgZzPwMvHwbrOsEnBsY7GwHjDoLT8B3DA_E0FvgBgyBgjBgPoGkSoGwH4D4mB8asEgF4D4IgKsToGkIsJ8GgUoGjDgUTgKwC0K0FoQgFwC0tB7B8Q8B8Q8GmIyF",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "cddab612-c7ee-4ac7-9d2b-a75b63262db0",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:21:11+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9751514,
                                "lng": -2.6440615
                            },
                            "originalLocation": {
                                "lat": 42.9751291,
                                "lng": -2.6439995
                            },
                            "waypoint": 55
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:23:54+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9596431,
                                "lng": -2.6432027
                            },
                            "originalLocation": {
                                "lat": 42.9597003,
                                "lng": -2.6432169
                            },
                            "waypoint": 56
                        }
                    },
                    "summary": {
                        "duration": 163,
                        "length": 2321,
                        "baseDuration": 163
                    },
                    "polyline": "BG-6_-xC5lshF2SyM_O4N3DkD3hB0ZzFsEvjCg3B3c4XrEsEvMwRnVkczU0jBrd8zB_JkSvHkNrEwHzUwbrT8VjX0UjXkSvRwH_T0KrOgFnV0FvWsE7aoBnaAr0CjDrlCnBj1BrEzwCnGn2CvC7LvgBnLr0CnGjmBrEzKnQzUrdrsB7L3XzFrOrE7Q_J31BxDta",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "aba0158b-bf06-42c1-b840-38f3fc877d02",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:23:54+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9596431,
                                "lng": -2.6432027
                            },
                            "originalLocation": {
                                "lat": 42.9597003,
                                "lng": -2.6432169
                            },
                            "waypoint": 56
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:25:25+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9543163,
                                "lng": -2.6367707
                            },
                            "originalLocation": {
                                "lat": 42.9543196,
                                "lng": -2.63681
                            },
                            "waypoint": 57
                        }
                    },
                    "summary": {
                        "duration": 91,
                        "length": 1293,
                        "baseDuration": 91
                    },
                    "polyline": "BG2xh-xClwqhFyDuagK41BsE8Q0FsO8L4XsdssBoQ0UsE0KoGkmBoLs0CT4IjDoL3IkN3XoBjXwCze0FngDoarsBsJjhB4D_dUnfnBzevC_vC_JHB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "9e8c3926-6bae-4cdc-a09f-fb63d56a7816",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:25:25+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9543163,
                                "lng": -2.6367707
                            },
                            "originalLocation": {
                                "lat": 42.9543196,
                                "lng": -2.63681
                            },
                            "waypoint": 57
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:28:41+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9540352,
                                "lng": -2.639296
                            },
                            "originalLocation": {
                                "lat": 42.9540155,
                                "lng": -2.6392337
                            },
                            "waypoint": 58
                        }
                    },
                    "summary": {
                        "duration": 196,
                        "length": 1491,
                        "baseDuration": 195
                    },
                    "polyline": "BG4k39xCl-9gFzpBlG3c3D3rBnGrT7G3SzFzFvC_JnGzKzKjInL3D7G3I_TnG7QzFnLnGrJ3D3DvM3I7L_JjIjInGrJjD3I7B3I7B7QsEniCA_E7BzFwCriBgFj6BsE7BsE3DwCnG0pDsd7fwmD7B0KAwH4rB8GwHwC2oDk-B",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "ea4e5423-1e07-48aa-8a19-fbc838acc288",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:28:41+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9540352,
                                "lng": -2.639296
                            },
                            "originalLocation": {
                                "lat": 42.9540155,
                                "lng": -2.6392337
                            },
                            "waypoint": 58
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:31:36+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.95387,
                                "lng": -2.6508101
                            },
                            "originalLocation": {
                                "lat": 42.9539118,
                                "lng": -2.6508516
                            },
                            "waypoint": 59
                        }
                    },
                    "summary": {
                        "duration": 175,
                        "length": 1189,
                        "baseDuration": 175
                    },
                    "polyline": "BGmz29xC_7ihF1oDj-BvHvC3rB7GAvH8BzK8fvmDoLjhBk4CzzI8BnLoBrOsEz_CgFvhD",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "d94d91e7-68df-4aeb-a46b-4292e3d0d14e",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:31:36+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.95387,
                                "lng": -2.6508101
                            },
                            "originalLocation": {
                                "lat": 42.9539118,
                                "lng": -2.6508516
                            },
                            "waypoint": 59
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:32:29+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9562506,
                                "lng": -2.6511257
                            },
                            "originalLocation": {
                                "lat": 42.9562495,
                                "lng": -2.6511439
                            },
                            "waypoint": 60
                        }
                    },
                    "summary": {
                        "duration": 53,
                        "length": 268,
                        "baseDuration": 53
                    },
                    "polyline": "BG8o29xCzr5hFAAsTrEsO3DoLvCgUrE8G7BkSjDoLUgUoBgFwCkIvCuOzB",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "cdb87cf5-d031-4d43-8bd8-8583af0ce04e",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:32:29+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9562506,
                                "lng": -2.6511257
                            },
                            "originalLocation": {
                                "lat": 42.9562495,
                                "lng": -2.6511439
                            },
                            "waypoint": 60
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:33:54+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9560454,
                                "lng": -2.6533243
                            },
                            "originalLocation": {
                                "lat": 42.9560311,
                                "lng": -2.6533619
                            },
                            "waypoint": 61
                        }
                    },
                    "summary": {
                        "duration": 85,
                        "length": 322,
                        "baseDuration": 85
                    },
                    "polyline": "BG2969xCr_5hFuCHjD_JzU3c7G7QvMvH7QnG_JzKsJ7V4IvH8BrEAzUgeU2ErD",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "cfa7bc08-0789-433b-a63f-645731b29a32",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:33:54+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9560454,
                                "lng": -2.6533243
                            },
                            "originalLocation": {
                                "lat": 42.9560311,
                                "lng": -2.6533619
                            },
                            "waypoint": 61
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:37:46+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9594897,
                                "lng": -2.6709775
                            },
                            "originalLocation": {
                                "lat": 42.9595,
                                "lng": -2.6709715
                            },
                            "waypoint": 62
                        }
                    },
                    "summary": {
                        "duration": 232,
                        "length": 2085,
                        "baseDuration": 232
                    },
                    "polyline": "BG6w69xC3o-hF1EsD_dTze_TUvHvCjI3IrEnGzU7BzZvC_EjI_E_E_E7B_EnBzPnG_dzFzF7VvC_E7GjNrE3D_EAjI8GnQgPzewM7QkN_O4NrJkI7G8BrEUzF7BzFvCjD_OrJjNrJvC3D7BnGUv5B7B7LvC3IAzF8B3IkD7GgKvM4IjN0F3NwCrJoB3SU7pBkD7V0KjwB8GvbgevyCkD3NoBrJAnaoB7GkDnGsE_E4NjIgFnBgFUwHwC0FnBsErE0FvHgP3rB4IjS4IzPkDrJkIjc0PztB4DrO4IvqBoQnzBsE3IwH7LoG7GsO_JkX8LkInBwHrEgFoB4DgFkDoGwRwMkDT4D_TwC_H",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "f715e090-563e-453c-8163-52677891ec7f",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:37:46+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9594897,
                                "lng": -2.6709775
                            },
                            "originalLocation": {
                                "lat": 42.9595,
                                "lng": -2.6709715
                            },
                            "waypoint": 62
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:41:32+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9543362,
                                "lng": -2.6528955
                            },
                            "originalLocation": {
                                "lat": 42.9543602,
                                "lng": -2.6529036
                            },
                            "waypoint": 63
                        }
                    },
                    "summary": {
                        "duration": 226,
                        "length": 1987,
                        "baseDuration": 226
                    },
                    "polyline": "BGkoh-xCj4gjFU_BnBnGoBrOnLT3IoBzPAvH4D7GoGnGkD3N8BjIsErOgKnG8GvH8LrE4InQozB3IwqB3DsOzP0tBjIkcjDsJ3I0P3IkS_O4rBzFwHrEsEzFoBvHvC_ET_EoB3NkIrEgFjDoGnB8GAoanBsJjD4N_dwyC7GwbzKkwBjD8VT8pBnB4SvCsJzF4N3IkN_JwMjD8G7B4IA0FwC4I8B8LTw5B8BoGwC4DkNsJgPsJwCkD8B0FT0F7BsEjI8G3NsJjNgPvM8Q_O0e7GoQAkI4DgFkNsEgF8G8VwC0F0FoGgeoB0PvCwHnBsJA4hB3DkXjD8asF2d",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "f50af6c1-96fc-400b-a034-743d48d1e092",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:41:32+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.9543362,
                                "lng": -2.6528955
                            },
                            "originalLocation": {
                                "lat": 42.9543602,
                                "lng": -2.6529036
                            },
                            "waypoint": 63
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T16:43:06+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.95158,
                                "lng": -2.64688
                            },
                            "originalLocation": {
                                "lat": 42.951505,
                                "lng": -2.6468179
                            },
                            "waypoint": 64
                        }
                    },
                    "summary": {
                        "duration": 94,
                        "length": 619,
                        "baseDuration": 94
                    },
                    "polyline": "BGgm39xC9t9hFc2E7BkD3SokB3D8fzFs2BjmBsJ_JkDnGsE_EwH_EoLvM4hB3IwWv5B45E",
                    "transport": {
                        "mode": "truck"
                    }
                },
                {
                    "id": "f872d8d5-69d0-4821-87d8-44c8f8052dd8",
                    "type": "vehicle",
                    "departure": {
                        "time": "2025-10-08T16:43:06+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.95158,
                                "lng": -2.64688
                            },
                            "originalLocation": {
                                "lat": 42.951505,
                                "lng": -2.6468179
                            },
                            "waypoint": 64
                        }
                    },
                    "arrival": {
                        "time": "2025-10-08T17:00:14+02:00",
                        "place": {
                            "type": "place",
                            "location": {
                                "lat": 42.8371709,
                                "lng": -2.7539574
                            },
                            "originalLocation": {
                                "lat": 42.837163,
                                "lng": -2.754061
                            }
                        }
                    },
                    "summary": {
                        "duration": 1028,
                        "length": 19461,
                        "baseDuration": 1020
                    },
                    "polyline": "BG45x9xC_1xhFAArJsYnV41BjIgPzPkXjNwWjD8GzF8QjD4NvCoavCgezFoBrEsE7B8GUwH8B0FsEgF4DoB_Ek6BvCsiBrE4SrE8pBjIg3BrJs2BjDsJ_E4IzFkInGoGjIsE3IwCrdkD_OvCjNnBzhC3I7zBjXjrB_T7kBzP7L_EvgBrOjNzF7anL7GjD3IrEvgB3NnzBjX_rEv-B7kG72C_lC_dzhCzZv-B7QjmBvH3X3DvqB_E_dTr5CvCvhDrEn9BzF3kCvHnL7BrxB7GnsCrOzPjDjNjDvR3DrJ7B7VnG_Y3I3XrJzU_J_YrO_lC7uBvMjIjSvMjDvC3mB_Y3SzK_YvMjc7LztBrOnazFvWjD7zBvCnpBwC7uB8GzPkDvvBsJ_J8BnGU_TkDvgBkD7V8B7fnB_OnBvRjD39C3SzFnBn4BjN7kBjIvtCvRzjB3I7gDnV_7B_OvvB7Lv6DvgB76Fr2BnxCzZrwE3rBjpC3X_OrE7frJjcvH_rEjrB7iC_Tnf_JnxC_Y3wBrOvMnGvRvHrxBvR_5CnfvMrEzZzP3IzKjDzFvC7GvHnpBvCjIrE_JnG3IrErErY3SzK7LzFzKzFnVkD7gDAjSnBjX8Gj9CoG3nDkDjkCU3zCnB3kCjDvjCjDvvBvHzwCjNzpDnL7iC3X3vEzFjmB_JnxC_E_gCjD7sCU_xBkDrqC8BrYgF7uBoGvvB8L_lC0jBzqF8GnzBwCjc8B7aU_nBT7VvCrnBjDrd3Iz8B7L_gCjIrxB3I3kCjDn4BnBjwBwCj_BsEv-BkDvqB8G77CwC3rBU7iCjD_qC_En4BvH74BvHvqB7GzjBnLvvBnGjX7G3XzFjS7G_TzFnQnGjSjInVnL_d_O_iBjIrTvWnuBrYjwBrT_iBzjBj6B_Y7kBzZnkBjmB3wB7V_YzPjSnLvM7avbrdjcjwBvqBj_B31Bn9Br2BzoB_nBvbzenkBnuB_OnV7anpBzer2BvWztB_TvvB_J_Y7L_iB_O7uBnVnnC7VjpC7V3kCnazrC_O3mBjczhCnV_sB_JrTna7uBzP_d36B39CvgBnuBvb7kBrJnL_T3XjXnavlBzoB3uCzwCjhBzjBnGvH3NnQvlBnuBvlBnuBjcze3N3N_iBnf_O7L3X7QzZnQ7Q_JriBzPnQnGriBzKnpBzK_O3Dv5B3Nvb7GnkB7LzjBzPzZjNrYrOjS7LvvBnkBjrBzjBnGrE3I7GzUzPrT3NzUjN7QzPze_TzP7LnQnQvH_J_EjIvM3XvqBj4C_J_TjD3I7BjITjN4DvHoBrE8BrOTvH3DvMjDnGjDrEzK3IrJ7BzFU7GwC_EkD3DsE3D0FrEoLvMsJrEoB7G8Br3D0P_OU7G3I3I3D7GwC7GgK7B4NrO8BrrE4SlBG",
                    "transport": {
                        "mode": "truck"
                    }
                }
            ]
        }
    ]
}