/* global daum */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AddPlace from '../components/AddPlace';
import { withMap } from '../contexts/MapContext';
import { getPlaceData } from '../ducks/addPlace';

class AddPlaceContainer extends Component {
  state = {
    inputValue: '',
    selectedName: '',
    selectedAddress: '',
    isPlaceSelected: false,
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSelect = e => {
    const selectedName = e.target.parentNode.firstChild.children[0].textContent;
    const selectedAddress =
      e.target.parentNode.firstChild.children[1].textContent;
    this.setState({
      isPlaceSelected: true,
      selectedName,
      selectedAddress,
    });
  };

  handleSubmit = e => {
    e.preventDefault(); // form tag 기본 동작 방지

    // place 검색을 위한 api 생성자 함수 호출
    const ps = new daum.maps.services.Places();

    // input값 읽어서 keyword로 담는다.
    const { inputValue } = this.state;

    // input값 초기화
    this.setState({
      inputValue: '',
    });

    // 검색결과 항목을 Element로 반환하는 함수입니다
    const getListItem = place => {
      const li = document.createElement('li');
      const dl = document.createElement('dl');
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      const btn = document.createElement('button');

      btn.setAttribute('type', 'button');

      dt.textContent = place.place_name;
      dd.textContent = place.address_name;

      dl.appendChild(dt);
      dl.appendChild(dd);

      li.appendChild(dl);
      li.appendChild(btn);
      li.className = 'searchListItem';
      li.onclick = event => {
        const { getData } = this.props;
        getData(place);
        if (event.target.nodeName !== 'BUTTON') return;
        this.handleSelect(event);
      };

      return li;
    };

    // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    const removeAllChildNodes = el => {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
    };

    // 검색 결과 목록을 표출하는 함수입니다
    const displayPlaces = places => {
      const listEl = document.querySelector('.placeSearchList');

      // 검색 결과 목록에 추가된 항목들을 제거합니다
      removeAllChildNodes(listEl);

      for (let i = 0; i < places.length; i += 1) {
        const itemEl = getListItem(places[i]); // 검색 결과 항목 Element를 생성합니다
        listEl.appendChild(itemEl); // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
      }
      listEl.scrollTop = 0;
    };

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
        linkEl.textContent = i;

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

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === daum.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면 검색 목록을 표출합니다
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

    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces(keyword) {
      if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch(keyword, placesSearchCB);
    }

    searchPlaces(inputValue);
  };

  render() {
    const {
      inputValue,
      isPlaceSelected,
      selectedName,
      selectedAddress,
    } = this.state;
    return (
      <>
        {isPlaceSelected ? (
          <Redirect
            push
            to={`/addplace/form?name=${encodeURIComponent(
              selectedName,
            )}&address=${encodeURIComponent(selectedAddress)}`}
          />
        ) : (
          <AddPlace
            inputValue={inputValue}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData: place => {
    dispatch(getPlaceData(place));
  },
});
export default connect(
  null,
  mapDispatchToProps,
)(withMap(AddPlaceContainer));
