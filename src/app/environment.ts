import { InjectionToken } from "@angular/core";

const windowToken = "WINDOW_INJECTABLE_TOKEN";
const envToken = "ENVIRONMENT_INJECTABLE_TOKEN";
export const WindowInjectable = new InjectionToken(windowToken);
export const EnvironmentInjectable = new InjectionToken(envToken);

export enum EnvironmentType {
    Production = "production",
    Development = "development",
    Qa = "qa"
}

export interface Environment {
    type: EnvironmentType;
}

export const environment: Environment = {
    type: EnvironmentType.Development
};