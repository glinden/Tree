draw = () ->
    ctx = document.getElementById('mainCanvas')?.getContext('2d')
    return if ctx is null
    w = ctx.canvas.width
    h = ctx.canvas.height
    ctx.clearRect(0,0,w,h)
    ctx.strokeRect(0,0,w,h)
    drawRecursively(ctx, w/2, h, 0, -h *.21, 0)

drawRecursively = (ctx, x, y, w, h, a) ->
    ctx.save()
    ctx.translate(x,y)
    ctx.rotate(a)
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(w,h)
    ctx.stroke()
    if (Math.abs(h)>10)
        r1 = .2
        r2 = .4
        l1 = .7
        l2 = .12
        for i in [-1..1]
            drawRecursively(ctx,w,h,0,h*(l1+l2*Math.random()),i*(r1+Math.random()*r2)) if (i isnt 0 or Math.random() < .2)
    ctx.restore()

initDemo = () ->
    draw()
    document.onmousedown = draw
