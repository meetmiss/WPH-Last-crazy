
    function getDate() {
        var local = localStorage.getItem('user');
        if (local !== null) {
            return JSON.parse(local); // 返回的是对象 需要转换
        } else {
            return []; // 如果没有数据则返回空数组
        }
    };


