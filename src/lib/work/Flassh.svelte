<div class="columns" id="flassh">
  <div class="column">
    <h1 class="title">Flassh Photobooths (Connect)</h1>
    <h2 class="subtitle">Supporting more & doing less</h2>
    <div class="content">
      <div class="block">
        <p>
          A photobooth application that allows companies to easily manage their
          photobooths and events, from taking photos to generating animations &
          managing their event gallery, all through an end-to-end Flassh
          platform.
        </p>
      </div>
      <div class="block">
        <p>
          It was a high priority to support more cameras than the original
          version of the Connect application. The original application was
          severely out of date and only supported Canon and Nikon cameras.
        </p>
      </div>
      <div class="block">
        <p>
          After assessing the current state of the application, and it's core
          functionality, it was determined that migrating the application to
          Rust will allow for a more robust application that can support a wide
          range of cameras and platforms. I examined the existing codebase
          (originally built in .NET 4.5), outlined the core functionality, and
          began the migration.
        </p>
      </div>
      <div class="block">
        <p>
          I was the sole developer on this project, and I was responsible for
          the development of the application's front-end and back-end. I also
          ensured that the application was properly tested, and that the
          application was properly packaged for distribution.
        </p>
      </div>
      <div class="block">
        <p>
          <i>
            The application is currently in a closed beta, and is expected to be
            released in the coming months.
          </i>
        </p>
      </div>
      <div class="block">
        <h3>Technologies Used: (crates in this case)</h3>
        <ul>
          <li>Rust</li>
          <li>libgphoto2 (gphoto2 crate)</li>
          <li>egui</li>
          <li>rouille</li>
          <li>NSIS (Windows installer)</li>
        </ul>
      </div>
      <div class="block">
        <p>
          <i>
            Blog post outlining how I got libgphoto2 working on Windows with
            Rust coming soon! It was a interesting journey, and I hope to help
            others skip the headaches I had.
          </i>
        </p>
      </div>
    </div>
  </div>
  <div class="is-divider-vertical" />
  <div class="column is-one-third">
    <div id="work-section">
      <img src="/img/flassh.jpg" />
    </div>
  </div>
</div>
