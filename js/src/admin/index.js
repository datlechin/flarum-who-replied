app.initializers.add('datlechin/flarum-who-replied', () => {
  app.extensionData.for('datlechin-who-replied').registerSetting(
    {
      setting: 'datlechin-who-replied.limit',
      label: app.translator.trans('datlechin-who-replied.admin.limit_label'),
      help: app.translator.trans('datlechin-who-replied.admin.limit_help'),
      type: 'number',
    },
    30
  );
});
