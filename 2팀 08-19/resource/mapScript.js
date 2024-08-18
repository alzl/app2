// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 4
};

var map = new kakao.maps.Map(container, options);




// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(map); 


// 카테고리로 은행을 검색합니다
ps.categorySearch('CE7', placesSearchCB, {useMapBounds:true}); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
        }       
    }
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}





function locationLoadSuccess(pos){
    // 현재 위치 받아오기
    var currentPos = new kakao.maps.LatLng(pos.coords.latitude,pos.coords.longitude);

    // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
    map.panTo(currentPos);

    // 마커 생성
    var marker = new kakao.maps.Marker({
        position: currentPos
    });

    // 기존에 마커가 있다면 제거
    marker.setMap(null);
    marker.setMap(map);
};



// 페이지가 로드될 때 현재 위치를 자동으로 가져옵니다.
window.onload = function() {
    getCurrentPosBtn();
};


// 현재 위치를 가져오는데 실패했을 경우 나타나는 메시지입니다.
function locationLoadError(pos){
    alert('위지 권한을 허용해주세요.');
};


// 위치 가져오기 버튼 클릭시
function getCurrentPosBtn(){
    // 현재 위치를 가져옵니다. (권한 요청)
    navigator.geolocation.getCurrentPosition(locationLoadSuccess,locationLoadError);
};


// 홈 버튼을 클릭 시 메인 페이지로 돌아갑니다.
function goHomeBtn() {
    location.href='index.html';
}