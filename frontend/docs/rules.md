# Some rules about the system which aren't linted

- All views must have stories
- All stories must use mocked props (no network calls etc)
- View models from presenters must be unit tested at least with snapshots
- Wireframes must not do any layout or styling, only composition and connecting view models to views
- Views must not do any business or formatting logic, only layout, styling and 1-1 rendering of data from view models
- Business logic must be placed to use cases
- The choice of storage must be abstracted by repository
