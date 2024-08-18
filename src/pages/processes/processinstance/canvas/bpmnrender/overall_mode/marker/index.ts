

function PerformMarker(canvas, elementRegistry) {
    canvas.addMarker('Activity_0nfx1ek', 'highlight');

    for (let element of elementRegistry.getAll()) {
        if (element.type === 'bpmn:EndEvent') {
            canvas.addMarker(element.id, 'highlight');
        }
    }
} 

export { PerformMarker };