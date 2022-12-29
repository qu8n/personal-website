import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-20">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Quan Nguyen
            </p>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
