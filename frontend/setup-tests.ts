// setup-tests.ts
import { GlobalWindow } from "happy-dom";

const window = new GlobalWindow();
globalThis.window = window as any;
globalThis.document = window.document as any;
