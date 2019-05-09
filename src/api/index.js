const fakeDatabase = {
  list: [{
      id: 1,
      category: 'restaurant',
      title: '훌라훌라',
      address: '서울 마포구 희우정로10길 4 (우)04017',
      latitude: 37.552617,
      longitude: 126.904614,
      url: 'https://place.map.kakao.com/1384758884',
    },
    {
      id: 2,
      category: 'restaurant',
      title: '뉴욕고깃집',
      address: '서울 마포구 방울내로9길 17 1층 (우)03961',
      latitude: 37.561453,
      longitude: 126.903274,
      url: 'https://place.map.kakao.com/526296311',
    },
    {
      id: 3,
      category: 'restaurant',
      title: '행벅식당',
      address: '서울 마포구 포은로 112 (우)04010',
      latitude: 37.556934,
      longitude: 126.904627,
      url: 'https://place.map.kakao.com/743930703',
    },
    {
      id: 4,
      category: 'restaurant',
      title: '카페나하',
      address: '서울 마포구 희우정로16길 32 2층 (우)04015',
      latitude: 37.554526,
      longitude: 126.903742,
      url: 'https://place.map.kakao.com/401923604',
    },
    {
      id: 5,
      category: 'restaurant',
      title: '꽃추장',
      address: '서울 마포구 망원로 48 1층 (우)04008',
      latitude: 37.556615,
      longitude: 126.902143,
      url: 'https://place.map.kakao.com/1932631675',
    },
    {
      id: 6,
      category: 'cafe',
      title: '카페청사진',
      address: '서울 마포구 포은로 89 2층 (우)04009',
      latitude: 37.554978,
      longitude: 126.905006,
      url: 'https://place.map.kakao.com/145391616',
    },
    {
      id: 7,
      category: 'cafe',
      title: '앳모스피어',
      address: '서울 마포구 망원로 54-1 1층 (우)04008',
      latitude: 37.556754,
      longitude: 126.902859,
      url: 'https://place.map.kakao.com/684219406',
    },
    {
      id: 8,
      category: 'cafe',
      title: '광합성카페',
      address: '서울 마포구 월드컵로19길 8 1층 (우)04012',
      latitude: 37.557074,
      longitude: 126.908432,
      url: 'https://place.map.kakao.com/1185919020',
    },
    {
      id: 9,
      category: 'cafe',
      title: '올라쉑',
      address: '서울 마포구 동교로 55-12 101호 (우)04018',
      latitude: 37.553804,
      longitude: 126.908324,
      url: 'https://place.map.kakao.com/507795359',
    },
    {
      id: 10,
      category: 'pub',
      title: '망원그곳',
      address: '서울 마포구 월드컵로13길 19-19 (우)04013',
      latitude: 37.5551,
      longitude: 126.909318,
      url: 'https://place.map.kakao.com/917742418',
    },
    {
      id: 11,
      category: 'pub',
      title: '볼링',
      address: '서울 마포구 방울내로7길 5 1층 (우)03960',
      latitude: 37.560102,
      longitude: 126.9025,
      url: 'https://place.map.kakao.com/27294339',
    },
    {
      id: 12,
      category: 'pub',
      title: '꼬치주간',
      address: '서울 마포구 포은로 70-1 (우)04014',
      latitude: 37.553504,
      longitude: 126.906121,
      url: 'https://place.map.kakao.com/1031182183',
    },
  ],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchList = async category => {
  const fetchResult = await delay(1000).then(() => {
    switch (category) {
      case 'all':
        return fakeDatabase.list;
      case 'restaurant':
        return fakeDatabase.list.filter(item => item.category === 'restaurant');
      case 'cafe':
        return fakeDatabase.list.filter(item => item.category === 'cafe');
      case 'pub':
        return fakeDatabase.list.filter(item => item.category === 'pub');
      default:
        throw new Error(`Unknown category: ${category}`);
    }
  });

  return fetchResult;
};

export default fetchList