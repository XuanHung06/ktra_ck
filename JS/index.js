$(document).ready(function() {
    var i = 1;
    $("#btnDK").click(function() {
        $("#myModal").modal();
    })
    $("#txtMaSV").blur(function() {
        var mauKT = /^[1-9]{1}[0-9]{9}$/
        var chuoi = $("#txtMaSV").val();
        if (mauKT.test(chuoi) == true) {
            alert("Bạn Nhập Đúng");
        } else {
            alert("Bạn nhập sai")
        }
    })
    $("#btnSubDK").click(function() {
        var chk = $('#chkboi:checked').val();
        var sl = $('#slCity:selected').text();
        var radGT = $("#radNam:checked").val();
        var maSV = $('#txtMaSV').val();
        var htSV = $('#txtHT').val();
        var emailSV = $('#txtEmail').val();
        alert(chk - " " + sl + " " + radGT);
        var gt = $("input[name='gioiTinh']:checked").map(function() {
            return this.value;
        }).get().join(',');
        var nk = $("input[name='nangKhieu']:checked").map(function() {
            return this.value;
        }).get().join(',');
        var dong = '<tr><td>' + i + '<td>' + maSV + '</td>' + '<td>' + htSV + '<td>' + gt + '<td>' + nk + '<td>' + emailSV + '<td>' + sl + '</td></tr>';
        $("#danhSach").append(dong);
        $('#myModal').hide();
    })
});