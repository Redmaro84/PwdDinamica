angular.module("PwdGen", [])
    .factory("facGenera", function () {
        var CalcolaParte = function (strParte) {
            var i = "";
            var PwdCalc = 0;
            var strDato = "";

            iDato = Number(strParte);
            strDato = strParte;

            do {
                for (i = 0; i < strDato.length; i++) {
                    PwdCalc = PwdCalc + Number(strDato.substr(i, 1));
                }

                if (PwdCalc < 10)
                { break; }
                else
                {
                    strDato = String(PwdCalc);
                    PwdCalc = 0;
                }
            }
            while (true);

            PwdCalc = 10 - PwdCalc
            return PwdCalc;
        };

        return function () {
            var sLettera = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L"];
            var iPwdAnno = 0;
            var iPwdMese = 0;
            var iPwdGiorno = 0;
            var iPwdLettera = "";
            var iPwdOra = 0;
            now = new Date();

            iPwdAnno = Number(CalcolaParte(String(now.getFullYear())));
            iPwdMese = Number(CalcolaParte(String(now.getMonth() + 1)));
            iPwdGiorno = Number(CalcolaParte(String(now.getDate())));
            iPwdLettera = sLettera[CalcolaParte(String(iPwdAnno) + String(iPwdMese) + String(iPwdGiorno))];
            iPwdOra = CalcolaParte(String(now.getHours()));

            return String(iPwdAnno) + String(iPwdMese) + String(iPwdGiorno) + iPwdLettera + iPwdOra;
        };
        //});
    })

//angular.module("PwdGen", [])
    .controller("genera",
       function ($scope, facGenera) {
           $scope.Password = "_____";

           $scope.genera = function () {
               //return facGenera();
               $scope.Password = facGenera();
           };

       });