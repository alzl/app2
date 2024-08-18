document.addEventListener('DOMContentLoaded', () => {
    // JSON 형식으로 데이터를 직접 자바스크립트 변수에 포함
    const notices = [
        { "id": 1, "important": true, "title": "안내사항", "author": "관리자", "date": "2024-08-16", "views": 1, "likes": 1, "content": "공지 내용 1" },
        { "id": 2, "important": false, "title": "공지사항 제목 2", "author": "작성자2", "date": "2024-08-15", "views": 456, "likes": 20, "content": "공지 내용 2" }
    ];

    function displayNotices(notices) {
        const noticeList = document.querySelector('.notice-list');
        noticeList.innerHTML = '';  // 테이블 초기화
        notices.forEach(notice => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="${notice.important ? 'important' : ''}">${notice.important ? '공지' : ''}</td>
                <td>${notice.title}</td>
                <td>${notice.author}</td>
                <td>${notice.date}</td>
                <td>${notice.views.toLocaleString()}</td>
                <td>${notice.likes}</td>
            `;
            row.onclick = () => showNoticeView(notice.id);
            noticeList.appendChild(row);
        });
    }

    function showNoticeView(id) {
        const notice = notices.find(n => n.id === id);
        alert(notice ? `제목: ${notice.title}\n내용: ${notice.content || '내용 없음'}` : '해당 공지를 찾을 수 없습니다.');
    }

    document.querySelector('#search-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const query = document.querySelector('#search-query').value.toLowerCase();
        const filteredNotices = notices.filter(notice => notice.title.toLowerCase().includes(query));
        displayNotices(filteredNotices);
    });

    // 공지사항 목록 표시
    displayNotices(notices);
});
