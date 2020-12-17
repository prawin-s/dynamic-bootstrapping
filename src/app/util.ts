import { AppComponent } from "./app.component";
import { Environment, EnvironmentType } from "./environment";
import { InFrameComponent } from "./in-frame.component";

export function decideRootComponent(window: Window, environment: Environment) {
    const isInIFrame = inIFrame(window);
    return environment.type === EnvironmentType.Development || isInIFrame
        ? AppComponent
        : InFrameComponent;
}

export function inIFrame(window: Window) {
    try {
        return window.self !== window.top;
    } catch {
        return true;
    }
}