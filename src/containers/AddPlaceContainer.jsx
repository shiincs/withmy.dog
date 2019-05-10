/* global daum */
import React, { Component } from 'react';

import AddPlace from '../components/AddPlace';
import { withMap } from '../contexts/MapContext';

class AddPlaceContainer extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault(); // form tag 기본 동작 방지

    const ps = new daum.maps.services.Places();
    const { map } = this.props;

    const keyword = this.state.inputValue;

    this.setState({
      inputValue: '',
    });

    searchPlaces(keyword);

    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces(keyword) {
      if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch(keyword, placesSearchCB);
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === daum.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        console.log(data);
        displayPlaces(data);
        // 페이지 번호를 표출합니다
        displayPagination(pagination);
      } else if (status === daum.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
      } else if (status === daum.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
      }
    }

    // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
    function displayPagination(pagination) {
      const paginationEl = document.querySelector('.paginationList');

      // 기존에 추가된 페이지번호를 삭제합니다
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (let i = 1; i <= pagination.last; i += 1) {
        const itemEl = document.createElement('li');
        itemEl.className = 'paginationItem';
        const linkEl = document.createElement('a');
        linkEl.className = 'paginationLink';
        linkEl.innerHTML = i;

        if (i === pagination.current) {
          linkEl.classList.add('open');
        } else {
          linkEl.onclick = (function(i) {
            return function() {
              pagination.gotoPage(i);
            };
          })(i);
        }
        itemEl.appendChild(linkEl);
        paginationEl.appendChild(itemEl);
      }
    }

    // 검색 결과 목록과 마커를 표출하는 함수입니다
    const displayPlaces = places => {
      const listEl = document.querySelector('.placeSearchList');
      const bounds = new daum.maps.LatLngBounds();

      // context api의 상태로 저장된 마커들을 불러온다.
      let markers = this.props.searchMarkers;

      // 검색결과 목록의 자식 Element를 제거하는 함수입니다
      const removeAllChildNods = el => {
        while (el.hasChildNodes()) {
          el.removeChild(el.lastChild);
        }
      };

      // 검색 결과 목록에 추가된 항목들을 제거합니다
      removeAllChildNods(listEl);

      // 지도 위에 표시되고 있는 마커를 모두 제거합니다
      const removeMarker = () => {
        for (let i = 0; i < markers.length; i += 1) {
          markers[i].setMap(null);
        }
        markers = [];
        this.props.handleSearchMarkers(markers);
      };

      // 지도에 표시되고 있는 마커를 제거합니다
      removeMarker();

      // 검색결과 항목을 Element로 반환하는 함수입니다
      const getListItem = (index, places) => {
        const el = document.createElement('li');
        el.innerHTML = `<dl>
            <dt>${places.place_name}</dt>
            <dd>${places.address_name}</dd>
          </dl>
          <button type="button"></button>
          `;
        el.className = 'searchListItem';
        return el;
      };

      for (let i = 0; i < places.length; i += 1) {
        // 마커를 생성하고 지도에 표시합니다
        const placePosition = new daum.maps.LatLng(places[i].y, places[i].x);
        const marker = new daum.maps.Marker({
          map,
          position: placePosition,
        });
        // 생성된 마커를 배열에 저장한다.
        markers.push(marker);
        const itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        //   (function(marker, title) {
        //     daum.maps.event.addListener(marker, 'mouseover', function() {
        //       displayInfowindow(marker, title);
        //     });

        //     daum.maps.event.addListener(marker, 'mouseout', function() {
        //       infowindow.close();
        //     });

        //     itemEl.onmouseover = function() {
        //       displayInfowindow(marker, title);
        //     };

        //     itemEl.onmouseout = function() {
        //       infowindow.close();
        //     };
        //   })(marker, places[i].place_name);

        //   fragment.appendChild(itemEl);
        // }

        // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
        listEl.appendChild(itemEl);
        listEl.scrollTop = 0;

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }

      // 생성된 마커 배열을 상태에 저장한다.
      this.props.handleSearchMarkers(markers);
    };
  };

  render() {
    const { inputValue } = this.state;
    return (
      <AddPlace
        inputValue={inputValue}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withMap(AddPlaceContainer);
