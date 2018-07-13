const { URL } = require('url');
const request = require('./request');
require('dotenv').config();

const { TMAP_API_KEY } = process.env;

const POI_URL = 'https://api2.sktelecom.com/tmap/pois';

const searchPOIUrl = new URL(POI_URL);

searchPOIUrl.searchParams.set('version', 1);
searchPOIUrl.searchParams.set('searchKeyword', '서울역');
searchPOIUrl.searchParams.set('page', 1);
searchPOIUrl.searchParams.set('count', 20);
searchPOIUrl.searchParams.set('searchType', 'all');
// searchPOIUrl.searchParams.set('areaLLCode', '뭐야이건 찾아봐야지');
// searchPOIUrl.searchParams.set('areaLMCode', '이것도');
searchPOIUrl.searchParams.set('resCoordType', 'WGS84GEO');
// searchPOIUrl.searchParams.set('multiPoint', 'N'); 이것도 뭔지 모르겠고
searchPOIUrl.searchParams.set('searchtypCd', 'A'); // R이면거리순 검색 반경 필요해 A는 정확도순
searchPOIUrl.searchParams.set('radius', 123456); // 거리
// searchPOIUrl.searchParams.set('centerLon', 'WGS84GEO');
searchPOIUrl.searchParams.set('centerLat', 'WGS84GEO');
searchPOIUrl.searchParams.set('callback', 'WGS84GEO');
searchPOIUrl.searchParams.set('appKey', TMAP_API_KEY);

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=UTF-8',
  'User-Agent': 'Super Agent/0.0.1'
};

const options = {
  url: searchPOIUrl.toString(),
  method: 'GET',
  headers
};

request(options).then(console.log);
