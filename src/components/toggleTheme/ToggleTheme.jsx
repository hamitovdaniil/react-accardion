export default function ToggleTheme() {
    return (
        <aside className="toggleTheme">
            <label className="toggleTheme__label">
                <input type="checkbox" className="toggleTheme__input" />
                <span className="toggleTheme__slider"></span>
            </label>
        </aside>
    )
}