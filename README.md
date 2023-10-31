# Github-actions-prova
## Toy example per il concetto di CI/CD pipeline con github actions.

- 31/01/2023

In questo esempio esploriamo in modo molto semplice il concetto di CI della pipeline. Abbiamo una piccola funzione sumValues() che esegue e restituisce la somma di due numeri interi e vi è associato un test che ne verifica il corretto funzionamento.

Successivamente viene definito un workflow (try.yaml) che ad ogni "push" inzializza un ambiente in cui installa Node, copia la directory, installa le dipendenze ed infine esegue il test.

Nel primo commit il workflow dà esito positivo, nel successivo commit la funzione somma viene modificata leggermente per osservare il fallimento del workflow.


