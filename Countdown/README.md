## Cálculo para contagem de segundos, minutos, horas e dias:

Resto do tempo oferecido em segundos, com os minutos removidos: tempo % 60;
Resto do tempo oferecido em segundos, para remover as horas de 'tempo' e retornar os minutos: (tempo % (60 * 60) / 60);
Resto do tempo oferecido em segundos, para remover os dias de 'tempo' e retornar as horas: (tempo % (60 * 60 * 24)) / (60 * 60));
Resto do tempo em dias:  (tempo / (60 * 60 * 24));