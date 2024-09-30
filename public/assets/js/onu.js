const div_saude = document.querySelector('section:nth-of-type(1) div:nth-of-type(1)');
const div_educacao = document.querySelector('section:nth-of-type(1) div:nth-of-type(2)');
const div_climatic = document.querySelector('section:nth-of-type(1) div:nth-of-type(3)');

const div_inovacao = document.querySelector('section:nth-of-type(2) div:nth-of-type(1)');
const div_reducDesiguald = document.querySelector('section:nth-of-type(2) div:nth-of-type(2)');
const div_prodResponsv = document.querySelector('section:nth-of-type(2) div:nth-of-type(3)');


div_saude.addEventListener('mouseenter', function () {
    div_saude.style.transition = '0.7s';
    div_saude.style.backgroundColor = '#4C9F38';
    div_saude.style.boxShadow = '0 0 50px #3aff09';
})

div_saude.addEventListener('mouseleave', function () {
    div_saude.style.transition = '0.7s';
    div_saude.style.backgroundColor = 'rgba(77, 159, 56, 0.40)';
    div_saude.style.boxShadow = 'none';
})

div_educacao.addEventListener('mouseenter', function () {
    div_educacao.style.transition = '0.7s';
    div_educacao.style.backgroundColor = '#C5192D';
    div_educacao.style.boxShadow = '0 0 60px #dd0e26';
})

div_educacao.addEventListener('mouseleave', function () {
    div_educacao.style.transition = '0.7s';
    div_educacao.style.backgroundColor = 'rgba(197, 25, 45, 0.40)';
    div_educacao.style.boxShadow = 'none';
})

div_climatic.addEventListener('mouseenter', function () {
    div_climatic.style.transition = '0.7s';
    div_climatic.style.backgroundColor = '#3f7e44';
    div_climatic.style.boxShadow = '0 0 60px #319e3a';
})

div_climatic.addEventListener('mouseleave', function () {
    div_climatic.style.transition = '0.7s';
    div_climatic.style.backgroundColor = 'rgba(63, 126, 68, 0.4)';
    div_climatic.style.boxShadow = 'none';
})

div_inovacao.addEventListener('mouseenter', function () {
    div_inovacao.style.transition = '0.7s';
    div_inovacao.style.backgroundColor = '#FD6925';
    div_inovacao.style.boxShadow = '0 0 60px #ff5100';
})

div_inovacao.addEventListener('mouseleave', function () {
    div_inovacao.style.transition = '0.7s';
    div_inovacao.style.backgroundColor = 'rgba(253, 105, 37, 0.40)';
    div_inovacao.style.boxShadow = 'none';
})

div_reducDesiguald.addEventListener('mouseenter', function () {
    div_reducDesiguald.style.transition = '0.7s';
    div_reducDesiguald.style.backgroundColor = '#DD1367';
    div_reducDesiguald.style.boxShadow = '0 0 60px #ff006a';
})

div_reducDesiguald.addEventListener('mouseleave', function () {
    div_reducDesiguald.style.transition = '0.7s';
    div_reducDesiguald.style.backgroundColor = 'rgba(221, 19, 103, 0.40)';
    div_reducDesiguald.style.boxShadow = 'none';
})

div_prodResponsv.addEventListener('mouseenter', function () {
    div_prodResponsv.style.transition = '0.7s';
    div_prodResponsv.style.backgroundColor = '#bf8b2e';
    div_prodResponsv.style.boxShadow = '0 0 60px #ffa200';
})

div_prodResponsv.addEventListener('mouseleave', function () {
    div_prodResponsv.style.transition = '0.7s';
    div_prodResponsv.style.backgroundColor = 'rgba(191, 138, 46, 0.40)';
    div_prodResponsv.style.boxShadow = 'none';
})