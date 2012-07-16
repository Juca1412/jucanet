JucaNet
=======

Navegador fullscreen em XUL

Instruções:

Use o seguinte comando git ```$ git clone git://github.com/Juca1412/JucaNet.git``` OU baixe o código como um ZIP, clicando no botão no topo da página.
Em seguida, faça download do Mozilla XULRunner em http://ftp.mozilla.org/pub/xulrunner/nightly/latest-mozilla-central/. O arquivo a ser baixado depende do seu sistema operacional.
Extraia o XULRunner em uma pasta com o nome de "xulrunner", que deve ficar na raíz do JucaNet.
Copie o binário/executável "xulrunner-stub" da pasta "xulrunner" para a raíz. Renomeie para JucaNet e execute.
Lembre-se que você precisa usar uma versão do XULRunner compatível. 

MinVersion é a versão mínima do XULRunner compatível e MaxVersion é a versão máxima compatível.

----------

Como ativar a rolagem suave: entre em "about:config" usando a barra de endereços. Adicione uma preferência boolean com o nome de "general.smoothScroll", com o valor true.