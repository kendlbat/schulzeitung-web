<script lang="ts">
    export let src: string;
</script>

<iframe
    src={`/pdfjs-dist/web/viewer.html?file=${src}`}
    title="PDF Viewer"
    frameborder="0"
    class="h-full w-full"></iframe>
