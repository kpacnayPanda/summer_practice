function genPDF() {
    const elem = document.getElementById("elem");

    var opt = {
        filename:     'rack_plan.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
    };

    html2pdf().set(opt).from(elem).save();
}