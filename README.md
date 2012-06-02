JucaNet
=======

Navegador fullscreen em XUL

Instruções:

Use o seguinte comando git ```$ git clone git://github.com/Juca1412/JucaNet.git``` OU baixe o código como um ZIP, clicando no botão no topo da página.
Em seguida, faça download do Mozilla XULRunner em http://ftp.mozilla.org/pub/xulrunner/nightly/latest-mozilla-central/. O arquivo a ser baixado depende do seu sistema operacional.
Extraia o XULRunner em uma pasta com o nome de "xulrunner", que deve ficar na raíz do JucaNet.
Copie o binário/executável "xulrunner-stub" da pasta "xulrunner" para a raíz. Renomeie para JucaNet e execute.
Lembre-se que você precisa usar uma versão do XULRunner compatível. Para mudar a compatibilidade, edite o arquivo "application.ini" e mude este trecho:

```
[Gecko]
MinVersion=1.8
MaxVersion=15.0
```

MinVersion é a versão mínima do XULRunner compatível e MaxVersion é a versão máxima compatível.