import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";
import { Layer } from "../types";

class LayerStore {
  layers: Layer[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addLayer(layerData: Omit<Layer, "id" | "timestamp">) {
    this.layers.push({
      id: nanoid(),
      timestamp: Date.now(),
      ...layerData,
    });
  }

  removeLayer(layerId: string) {
    this.layers = this.layers.filter((layer) => layer.id !== layerId);
  }

  clear() {
    this.layers = [];
  }
}

export const layerStore = new LayerStore();
