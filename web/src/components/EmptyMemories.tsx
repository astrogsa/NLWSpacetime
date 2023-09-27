export function EmptyMemories() {
    return (
        <div className="flex p-16 flex-1 items-center justify-center">
            <p className="text-center leading-relaxed w-[360px]">
                Você ainda não registrou nenhuma lembrança, comece agora a{' '}
                <a href="/memories/new" className="underline hover:text-gray-50">
                    criar agora
                </a>
            </p>
        </div>
    )
}