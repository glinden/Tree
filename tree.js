var draw, drawRecursively, initDemo;
draw = function() {
  var ctx, h, w, _ref;
  ctx = (_ref = document.getElementById('mainCanvas')) != null ? _ref.getContext('2d') : void 0;
  if (ctx === null) {
    return;
  }
  w = ctx.canvas.width;
  h = ctx.canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.strokeRect(0, 0, w, h);
  return drawRecursively(ctx, w / 2, h, 0, -h * .21, 0);
};
drawRecursively = function(ctx, x, y, w, h, a) {
  var r1, r2;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(a);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w, h);
  ctx.stroke();
  if (Math.abs(h) > 10) {
    r1 = .1;
    r2 = .5;
    drawRecursively(ctx, w, h, 0, h * .8, r1 + Math.random() * r2);
    drawRecursively(ctx, w, h, 0, h * .8, -r1 - Math.random() * r2);
  }
  return ctx.restore();
};
initDemo = function() {
  draw();
  return document.onmousedown = draw;
};