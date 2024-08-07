/********************************************************************************
 * Copyright (c) 2020-2023 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { createBPMNDiagramContainer } from '@open-bpmn/open-bpmn-glsp/lib';

//import { ConsoleLogger, LogLevel, TYPES } from '@eclipse-glsp/client';
import { ConsoleLogger, IDiagramOptions, LogLevel, TYPES, bindOrRebind, createDiagramOptionsModule } from '@eclipse-glsp/client';

//import { eclipseCopyPasteModule, eclipseDeleteModule, EclipseGLSPDiagramServer } from '@eclipse-glsp/ide';
import { ECLIPSE_DEFAULT_MODULE_CONFIG } from '@eclipse-glsp/ide';

import { Container } from 'inversify';
//import '../css/diagram.css';
import '../css/bpmn-eclipse.css';

// export default function createContainer(widgetId: string): Container {
//     const container = createBPMNDiagramContainer(widgetId);
//     container.bind(TYPES.ModelSource).to(EclipseGLSPDiagramServer).inSingletonScope();
//     container.rebind(TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
//     container.rebind(TYPES.LogLevel).toConstantValue(LogLevel.warn);
//     container.load(eclipseCopyPasteModule);
//     container.load(eclipseDeleteModule);
//     return container;
// }


export default function createContainer(options: IDiagramOptions): Container {
    const container = createBPMNDiagramContainer(createDiagramOptionsModule(options), ECLIPSE_DEFAULT_MODULE_CONFIG);
    bindOrRebind(container, TYPES.ILogger).to(ConsoleLogger).inSingletonScope();
    bindOrRebind(container, TYPES.LogLevel).toConstantValue(LogLevel.warn);
    return container;
}
