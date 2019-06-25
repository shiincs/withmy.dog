/* global daum */
import React, { Component } from 'react';

import markerBar from '../assets/images/Marker_Bar.svg';
import markerCafe from '../assets/images/Marker_Cafe.svg';
import markerRestaurant from '../assets/images/Marker_Restaurant.svg';
import footPrint from '../assets/images/footprint_off.svg';
import writeReview from '../assets/images/review_write.svg';

const { Provider, Consumer } = React.createContext();

class MapProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      searchMarkers: [],
      onMarker: false,
      handleSearchMarkers: this.handleSearchMarkers,
      handleMap: this.handleMap,
      drawMarker: this.drawMarker,
    };
  }

  handleSearchMarkers = markers => {
    this.setState({
      searchMarkers: [...markers],
    });
  };

  handleMap = (list, latitude, longitude) => {
    /* 맵이 렌더링 될 엘리먼트 지정 */
    const el = document.getElementById('mapEl');

    /* 맵 옵션 생성 */
    // const mapOptions = {
    //   center:
    //     latitude && longitude
    //       ? new daum.maps.LatLng(latitude, longitude)
    //       : new daum.maps.LatLng(37.552617, 126.904614),
    // };
    const mapOptions = {
      center:
        list.length > 0
          ? new daum.maps.LatLng(list[0].latitude, list[0].longitude)
          : new daum.maps.LatLng(37.552617, 126.904614),
      level: 3,
    };

    /* 맵 생성 */
    const daumMap = new daum.maps.Map(el, mapOptions);

    this.setState({
      map: daumMap,
    });

    /* 카피라이트 위치를 우하단으로 변경 */
    daumMap.setCopyrightPosition(daum.maps.CopyrightPosition.BOTTOMRIGHT, true);

    /* 마커를 그린다 */
    this.drawMarker(daumMap, list);
  };

  drawMarker = (map, list) => {
    const markers = [];
    const overlays = [];
    const imageSrc = (list, i) => {
      if (list[i].category === 'restaurant') {
        return markerRestaurant;
      }
      if (list[i].category === 'cafe') {
        return markerCafe;
      }
      if (list[i].category === 'pub') {
        return markerBar;
      }
    };

    for (let i = 0; i < list.length; i += 1) {
      const imageSize = new daum.maps.Size(50, 50); // 마커이미지의 크기입니다
      const imageOption = { offset: new daum.maps.Point(0, 35) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      const markerImage = new daum.maps.MarkerImage(
        imageSrc(list, i),
        imageSize,
        imageOption,
      );

      /* 마커를 찍는다 */
      const marker = new daum.maps.Marker({
        map, // 마커를 표시할 지도
        position: new daum.maps.LatLng(list[i].latitude, list[i].longitude), // 마커를 표시할 위치
        title: list[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
        image: markerImage,
      });

      markers.push(marker);

      /* 커스텀 오버레이의 내용 */
      const content = `
        <div class="infoOverlay">
          <figure>
            <img src="https://seoul-p-studio.bunjang.net/product/75620694_1_1522899581_w640.jpg" class="dogImage"/>
            <figcaption>
              <dl>
              <dt><a href='${list[i].url}' target='_blank'>${
        list[i].title
      }</a></dt>
              <dd>${list[i].address}</dd>
              </dl>
            </figcaption>
          </figure>
          <ul class="buttonList">
            <li><img src='${footPrint}' />104</li>
            <li><img src='${writeReview}' />리뷰쓰기</li>
          </ul>
        </div>
      `;

      /* 오버레이 생성 */
      const overlay = new daum.maps.CustomOverlay({
        content,
        map,
        position: marker.getPosition(),
        xAnchor: 0.45,
        yAnchor: 1.65,
        clickable: true,
      });

      overlays.push(overlay);

      /* 일단 모든 오버레이를 꺼둔다 */
      overlay.setMap(null);
    }

    const handleMarker = flag => {
      /* 현재 마커의 상태를 변경 (마커가 클릭되었는지 아닌지, 즉 오버레이가 떠있는지 상태를 확인) */
      this.setState({ onMarker: flag });
    };

    /* 마커를 클릭 했을 때 현재 마커의 상태를 읽어오기 위해 this를 MapView.jsx 컴포넌트에 묶어둔다 */
    const bindThis = this;

    for (let i = 0; i < list.length; i += 1) {
      daum.maps.event.addListener(markers[i], 'click', function() {
        /* 마커 클릭에 대한 이벤트이기 때문에 이벤트 발생 시 this는 마커에 묶이게 된다 */
        overlays.forEach(overlay => overlay.setMap(null));
        overlays[i].setMap(map);
        if (!bindThis.state.onMarker) {
          handleMarker(true);
        }
      });
    }

    daum.maps.event.addListener(map, 'click', function() {
      if (bindThis.state.onMarker) {
        overlays.forEach(overlay => overlay.setMap(null));
        handleMarker(false);
      }
    });
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

function withMap(WrappedComponent) {
  return function WithMap(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { MapProvider, Consumer as MapConsumer, withMap };
