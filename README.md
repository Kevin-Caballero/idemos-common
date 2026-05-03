# @idemos/common

Paquete compartido de iDemos. Contiene las entidades TypeORM que usa el resto de servicios del monorepo.

## Entidades

| Entidad              | Descripción                                    |
| -------------------- | ---------------------------------------------- |
| `User`               | Usuario de la aplicación                       |
| `Initiative`         | Iniciativa parlamentaria del Congreso          |
| `InitiativeSummary`  | Resumen generado por IA de una iniciativa      |
| `InitiativeStep`     | Paso de tramitación de una iniciativa          |
| `InitiativeLink`     | Enlace relacionado con una iniciativa          |
| `Vote`               | Voto de un usuario sobre una iniciativa        |
| `Follow`             | Seguimiento de una iniciativa por un usuario   |
| `OfficialVoteResult` | Resultado oficial de la votación parlamentaria |

## Uso

```ts
import { Initiative, InitiativeSummary, User } from "@idemos/common";
```

Este paquete se referencia como dependencia local (`file:../../packages/common`) en cada servicio del monorepo.

## Scripts

```bash
npm run build        # Compila el paquete (tsc)
npm run build:watch  # Compilación en modo watch
```

## Required versions

| Tool / Package | Version |
| -------------- | ------- |
| Node.js        | >= 18.0 |
| TypeScript     | ^5.0.0  |
| TypeORM        | ^0.3.0  |
