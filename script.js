setInterval(function () {  
    date = new Date(),  
    h = date.getHours(),  
    m = date.getMinutes(),  
    s = date.getSeconds(),  
    h = (h < 10) ? '0' + h : h,  
    m = (m < 10) ? '0' + m : m,  
    s = (s < 10) ? '0' + s : s,  
    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;  
    }, 1000);  

function getPath(url) {
    lastSlash = url.lastIndexOf("/")
    return url.substring(0, lastSlash + 1)
}
window.onload = function () {
    //�������� ������������� ��������
    var a = document.getElementById('switch');
    //������ �� ���� �������
    a.onclick = function () {
        //���������� �����-�� ��������
        if (this.innerHTML == 'switch') this.innerHTML = 'switch again';
        else this.innerHTML = 'switch';
        //������������� ������� �� ������ href
        return false;
    }
}

