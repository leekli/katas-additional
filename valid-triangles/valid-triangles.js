exports.validTriangles = (triangles) => {
  let total = 0;

  triangles.forEach((triangle) => {
    const sortedTriangle = triangle.sort((a, b) => a - b);
    if (sortedTriangle[2] < sortedTriangle[0] + sortedTriangle[1]) {
      total++;
    }
  });

  return total;
};
