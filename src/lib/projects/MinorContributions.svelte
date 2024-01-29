<h1 class="title">Minor Contributions</h1>
<p>
    I've decided that 2024 is going to be the year of my open source
    contributions. Proving you know how to code without a degree is difficult,
    and though I've been coding for over 10 years, I don't have much to show for
    it. Improving the software and tools that I use on a daily basis is
    rewarding as well, of course.
</p>
<br />
<div class="columns">
    <div class="column">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">teams-for-linux</p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        Added a config option called "followSystemTheme" that
                        allows the app to follow the system theme. I added this
                        because I change my theme often, and it was annoying to
                        have to restart the app to get it to change.
                    </p>
                    <p>
                        I used IPC to communicate between the renderer process
                        and the main process, and used the Electron API to
                        change the theme.
                    </p>
                </div>
            </div>
            <footer class="card-footer">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/IsmaelMartinez/teams-for-linux/pull/1082"
                    class="card-footer-item">View</a
                >
            </footer>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">zoom_rb</p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        Updated this gem to include missing endpoints from the
                        Zoom API. In addition, I noticed there was a
                        inconsistency in the way that required parameters were
                        being determined since present parameters would
                        sometimes get marked as missing, so I fixed that as
                        well.
                    </p>
                    <p>
                        Currently working on getting this merged into the
                        project. I need to adjust some things to get the tests
                        passing, and then I'll re-submit my PR.
                    </p>
                </div>
            </div>
            <footer class="card-footer">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/CQCenter/zoom_rb"
                    class="card-footer-item">View</a
                >
            </footer>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">AMMO</p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        Another pretty small one, I use the Steam Flatpak
                        instead of the native version, and I noticed that AMMO
                        didn't have the ability to find games installed via the
                        Steam Flatpak.
                    </p>
                    <p>
                        I quickly added the ability for AMMO to check for both
                        the native and the flatpak versions of Steam, and ask
                        the user which one they want to manage. If only one was
                        found, it would just use that one.
                    </p>
                </div>
            </div>
            <footer class="card-footer">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/cyberrumor/ammo/pull/30"
                    class="card-footer-item">View</a
                >
            </footer>
        </div>
    </div>
</div>
