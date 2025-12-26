document.addEventListener("DOMContentLoaded", function () {
const codeParamName = 'code';
const tokenSpanId = 'token';

const tokenSpan = document.getElementById(tokenSpanId);

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const code = params.get('code');

tokenSpan.innerText = code;
});
