const ue = {
    "LU2IN022": "ACS",
    "LU2IN006": "SDD",
    "LU2IN009": "BDD",
    "LU2IN003": "ALG",
    "LU2IN024": "LOG",
    "LU2IN020": "ISS",
    "LU2IN018": "C",
    "LU2IN019": "OCaml",
    "LU2IN002": "Java",
    "LU2IN005": "Maths",
    "LU2IN011": "RMN",
    "LU2LVAN2": "Anglais",
    "LU3IN033": "Réseaux",
    "LU3IN029": "A.Ordinateurs",
    "LU3IN010": "SYS",
    "LU3IN0017": "WEB"
}

function hover_code() {
    const bloc = document.createElement("")
}
  
function replace(element) {
    if (element.nodeType == Node.TEXT_NODE) {
        for (var code in ue) {
            element.textContent = element.textContent.replace(code, ue[code]);
        }
    } else if (element.nodeType === Node.ELEMENT_NODE) {
        for (var i=0; i<element.childNodes.length; i++) {
            replace(element.childNodes[i]);
        }
    }
}

replace(document.body);