@if ($paginator->hasPages())
    <nav role="navigation" aria-label="Pagination Navigation" id='pagination-container'>
        @if (!$paginator->onFirstPage())
            <a href='{{ $paginator->previousPageUrl() }}' class='btn btn-pagination' id='pagination-prev'>
                Previous
            </a>
        @endif
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" class='btn btn-pagination' id='pagination-next'>
                Next
            </a>
        @endif
    </nav>
@endif