function cauculus() {
    var w_wall = parseFloat(document.getElementById('width_wall').value);
    var w_paper = parseFloat(document.getElementById('width_paper').value);
    var h_wall = parseFloat(document.getElementById('height_wall').value);
    var loss = document.getElementById('sim');
    var el_result_end = document.getElementById('result_end');
    var result_papers = document.getElementById('result_papers');
    var mensage = ' metros de papel de parede ou '
    var mensage_2 = ' Rolo(s) de papel de parede '

    var result = w_wall / w_paper;
    var result_end = null;

    if (loss.checked == true) {
        var loss_paper = parseFloat(document.getElementById('loss_paper').value);
        result_end = result * (h_wall + loss_paper);
    } else {
        result_end = result * h_wall;

    };
    result_papers.innerHTML = Math.ceil(result_end / 10) + mensage_2;
    el_result_end.innerHTML = result_end.toFixed(3) + mensage;
}; 

function show_loss() {
    var loss = document.getElementById('loss');

    loss.classList.remove('hide');
};

function hide_loss() {
    var hide = document.getElementById('loss');

    hide.classList.add('hide');
};
