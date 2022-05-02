<script>
        function validar(){  
            var nome = form1.nome.value
            var email = form1.email.value
            var cidade = form1.cidade.value

                if(nome==""){
                    alert("Campo nome obrigatório!")
                    form1.nome.focus();
                    return false;
                }
                if(email==""){
                    alert("Campo E-mail obrigatório!")
                    form1.email.focus();
                    return false;
                }
                if(cidade==""){
                    alert("Campo cidade obrigatório!")
                    form1.cidade.focus();
                    return false;
                }
        }
    </script>