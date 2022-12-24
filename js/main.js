function getEle(ele) {
    return document.getElementById(ele);
}

/* 1. Quản lý tuyển sinh */
// Hàm trả về điểm dựa theo khu vực
function calcArea(area) {
    switch (area) {
        case "A":
            return 2;
        case "B":
            return 1;
        case "C":
            return 0.5;
        default:
            return 0;
    }
}
// Hàm trả về điểm dựa theo đối tượng
function calcType(type) {
    switch (type) {
        case "1":
            return 2.5;
        case "2":
            return 1.5;
        case "3":
            return 1;
        default:
            return 0;
    }
}

getEle('btnResult').onclick = function () {
    // input
    let standardGrade = +getEle("standardGrade").value;
    let subject1 = +getEle("subject1").value;
    let subject2 = +getEle("subject2").value;
    let subject3 = +getEle("subject3").value;
    let area = getEle("area").value;
    let type = getEle("type").value;
    let totalGrade = 0;
    let areaGrade = calcArea(area);
    let typeGrade = calcType(type);

    // progress
    totalGrade = subject1 + subject2 + subject3 + areaGrade + typeGrade;
    let result = '';
    if (standardGrade > 30 || standardGrade < 0) {
        alert('Điểm chuẩn phải nằm trong phạm vi từ 0 đến 30.')
    }
    else {
        if (subject1 == 0 || subject2 == 0 || subject3 == 0) {
            result = 'Bạn đã rớt do có điểm bằng 0';
        }
        else if (subject1 > 10 || subject2 > 10 || subject3 > 10) {
            alert('Điểm môn tối đa là 10.');
        }
        else if (subject1 < 0 || subject2 < 0 || subject3 < 0) {
            alert('Điểm môn không thể là một số âm.');
        }
        else {
            if (totalGrade >= standardGrade) {
                result = 'Bạn đã đậu với tổng điểm là ' + totalGrade;
            }
            else {
                result = 'Bạn đã rớt với tổng điểm là ' + totalGrade;
            }
        }
    }

    // output
    getEle('passFail').innerHTML = result;
}


/* 2. Tính tiền điện */
// Tính cho 50kw đầu
function KWCalc0(firstKW) {
    let result = firstKW * 500;
    return result;
}
// Tính cho 50kw kế tiếp
function KWCalc1(nextKW1) {
    let result1 = 50 * 500 + (nextKW1 - 50) * 650;
    return result1;
}
// Tính cho 100kw kế tiếp
function KWCalc2(nextKW2) {
    let result2 = 50 * 500 + 50 * 650 + (nextKW2 - 100) * 850;
    return result2;
}
// Tính cho 150kw kế tiếp
function KWCalc3(nextKW3) {
    let result3 = 50 * 500 + 50 * 650 + 100 * 850 + (nextKW3 - 200) * 1100;
    return result3;
}
// Phần còn lại
function KWCalc4(nextKW4) {
    let result4 = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (nextKW4 - 350) * 1300;
    return result4;
}

getEle('btnElecBill').onclick = function () {
    // input
    let username = getEle('username').value;
    let KWnum = +getEle('KWnum').value;

    // progress
    let notification = '';
    if (KWnum <= 0) {
        alert('Số kw không hợp lệ! Vui lòng nhập lại.');
    }
    else {
        if (KWnum <= 50) {
            let bill0 = KWCalc0(KWnum);
            notification = 'Họ tên: ' + username + ' ⇒ Tiền điện: ' + bill0.toLocaleString();
        }
        else if (KWnum > 50 && KWnum <= 100) {
            let bill1 = KWCalc1(KWnum);
            notification = 'Họ tên: ' + username + ' ⇒ Tiền điện: ' + bill1.toLocaleString();
        }
        else if (KWnum > 100 && KWnum <= 200) {
            let bill2 = KWCalc2(KWnum);
            notification = 'Họ tên: ' + username + ' ⇒ Tiền điện: ' + bill2.toLocaleString();
        }
        else if (KWnum > 200 && KWnum <= 350) {
            let bill3 = KWCalc3(KWnum);
            notification = 'Họ tên: ' + username + ' ⇒ Tiền điện: ' + bill3.toLocaleString();
        }
        else {
            let bill4 = KWCalc4(KWnum);
            notification = 'Họ tên: ' + username + ' ⇒ Tiền điện: ' + bill4.toLocaleString();
        }
    }

    // output
    getEle('finalElecBill').innerHTML = notification;
}


/* 3. Tính thuế thu nhập cá nhân */
// Viết hàm tính thu nhập chịu thuế
function TaxableIncome(total, people) {
    let taxableIncome = total - 4e+6 - people * 1.6e+6;
    return taxableIncome;
}

getEle('btnTaxCalc').onclick = function () {
    // input
    let individual = getEle('individual').value;
    let totalIncome = +getEle('totalIncome').value;
    let peopleNum = +getEle('peopleNum').value;

    // progress
    let taxableIncome = TaxableIncome(totalIncome, peopleNum);
    let personalTax = 0;
    let taxReport = '';

    if (totalIncome <= 0) {
        alert('Tổng thu nhập năm phải lớn hơn 0.');
    }
    else if (peopleNum < 0) {
        alert('Số người phụ thuộc phải lớn hơn hoặc bằng 0.');
    }
    else if (taxableIncome <= 0) {
        alert('Hãy nhập dữ liệu sao cho tiền thuế thu nhập cá nhân phải lớn hơn 0.');
    }
    else {
        if (taxableIncome <= 60e+6) {
            personalTax = taxableIncome * 0.05;
        }
        else if (taxableIncome > 60e+6 && taxableIncome <= 120e+6) {
            personalTax = taxableIncome * 0.1;
        }
        else if (taxableIncome > 120e+6 && taxableIncome <= 210e+6) {
            personalTax = taxableIncome * 0.15;
        }
        else if (taxableIncome > 210e+6 && taxableIncome <= 384e+6) {
            personalTax = taxableIncome * 0.2;
        }
        else if (taxableIncome > 384e+6 && taxableIncome <= 624e+6) {
            personalTax = taxableIncome * 0.25;
        }
        else if (taxableIncome > 624e+6 && taxableIncome <= 960e+6) {
            personalTax = taxableIncome * 0.3;
        }
        else {
            personalTax = taxableIncome * 0.35;
        }
        taxReport = 'Họ tên: ' + individual + ' ⇒ Tiền thuế thu nhập cá nhân là ' + personalTax.toLocaleString() + ' VND';
    }

    // output
    getEle('totalTax').innerHTML = taxReport;
}


/* 4. Tính tiền cáp */
// Hàm ẩn/hiện cho option "Doanh Nghiệp"
function switchType() {
    let customerType = getEle('customerType').value;
    switch (customerType) {
        case "resident":
            getEle('divLinks').style.display = "none";
            break;
        case "enterprise":
            getEle('divLinks').style.display = "block";
            break;
        default:
            getEle('divLinks').style.display = "none";
            break;
    }
}
// Hàm tính tiền cáp cho nhà dân
function residentBill(resChannelNum) {
    let bill0 = 4.5 + 20.5 + 7.5 * resChannelNum;
    return bill0;
}
// Hàm tính tiền cáp cho doanh nghiệp có 10 kết nối trở xuống
function enterpriseBill1(enChannelNum1) {
    let bill1 = 15 + 75 + 50 * enChannelNum1;
    return bill1;
}
// Hàm tính tiền cáp cho doanh nghiệp có hơn 10 kết nối
function enterpriseBill2(linksNum, enChannelNum2) {
    let bill2 = 15 + 75 + (linksNum - 10) * 5 + 50 * enChannelNum2;
    return bill2;
}
// Hàm chuẩn hóa cách hiển thị số (tạo dấu phẩy giữa các số ở phần nguyên và phần thập phân thì sẽ được làm tròn thành n chữ số)
Number.prototype.toLocaleFixed = function (n) {
    return this.toLocaleString(undefined, {
        minimumFractionDigits: n,
        maximumFractionDigits: n
    });
};

getEle('btnChannelBill').onclick = function () {
    // input
    let customerType = getEle('customerType').value;
    let customerID = getEle('customerID').value;
    let channelNum = +getEle('channelNum').value;
    let linksNum = +getEle('linksNum').value;

    // progress
    let finalBill = '';
    if (!customerID) {
        alert('Vui lòng nhập mã khách hàng.');
    }
    else {
        switch (customerType) {
            case "resident":
                let resBill = residentBill(channelNum);
                finalBill = 'Mã khách hàng: ' + customerID + '. Tiền cáp: $' + resBill.toLocaleFixed(2);
                break;
            case "enterprise":
                if (linksNum > 0 && linksNum <= 10) {
                    let enBill1 = enterpriseBill1(channelNum);
                    finalBill = 'Mã khách hàng: ' + customerID + '. Tiền cáp: $' + enBill1.toLocaleFixed(2);
                }
                else if (linksNum > 10) {
                    let enBill2 = enterpriseBill2(linksNum, channelNum);
                    finalBill = 'Mã khách hàng: ' + customerID + '. Tiền cáp: $' + enBill2.toLocaleFixed(2);
                }
                else if (channelNum < 0 || linksNum <= 0) {
                    alert('Dữ liệu không hợp lệ.');
                }
                break;
            default:
                alert('Hãy chọn loại khách hàng.');
                break;
        }
    }

    // output
    getEle('totalBill').innerHTML = finalBill;
}