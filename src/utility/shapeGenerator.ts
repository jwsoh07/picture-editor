import { Point, Rect, Circle, Triangle, Polygon } from "fabric";

class ShapeGenerator {
  createRectangle(pointer: Point, color: string) {
    return new Rect({
      left: pointer.x,
      top: pointer.y,
      width: 100,
      height: 60,
      fill: color,
    });
  }

  createTriangle(pointer: Point, color: string) {
    return new Triangle({
      left: pointer.x,
      top: pointer.y,
      width: 100,
      height: 100,
      fill: color,
    });
  }

  createCircle(pointer: Point, color: string) {
    return new Circle({
      left: pointer.x,
      top: pointer.y,
      radius: 40,
      fill: color,
    });
  }

  createHexagon(pointer: Point, color: string) {
    const radius = 50;
    const hexagonPoints = Array.from({ length: 6 }).map((_, i) => {
      const angle = (Math.PI / 3) * i; // 60° in radians
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      };
    });

    return new Polygon(hexagonPoints, {
      left: pointer.x,
      top: pointer.y,
      fill: color,
      originX: "center",
      originY: "center",
    });
  }
}

const shapeGenerator = new ShapeGenerator();

const shapeCreatorMapping = {
  rectangle: shapeGenerator.createRectangle,
  triangle: shapeGenerator.createTriangle,
  circle: shapeGenerator.createCircle,
  hexagon: shapeGenerator.createHexagon,
};

export default shapeCreatorMapping;
