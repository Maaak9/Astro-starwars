/// <reference types="astro/client" />

declare namespace App {
	// eslint-disable-next-line  @typescript-eslint/no-empty-interface
	export interface Locals {
    runtime: {
      setBuildersTtl: (time: number) => void,
    }
  }
}