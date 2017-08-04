<div id="container" class="clearfix">

<!-- BEGIN #access --> 
<div class="access">
  <dl class="a-fontsize">
    <dt>Размер шрифта:</dt>
    <dd><a href="#" rel="fontsize-small" class="a-fontsize-small"></a></dd>
    <dd><a rel="fontsize-normal" href="#" class="a-fontsize-normal"></a></dd>
    <dd><a href="#" rel="fontsize-big" class="a-fontsize-big"></a></dd>
  </dl>
  <dl class="a-colors">
    <dt>Цвета сайта:</dt>
    <dd><a href="#" rel="color1" class="a-color1"></a></dd>
    <dd><a href="#" rel="color2" class="a-color2"></a></dd>
    <dd><a href="#" rel="color3" class="a-color3"></a></dd>
  </dl>
  <dl class="a-images">
    <dt>Изображения:</dt>
    <dd><a rel="imgcolor" href="#" class="a-imgcolor"></a></dd>
		<dd><a rel="imggray" href="#" class="a-imggray"></a></dd>
		<dd><a rel="imgnone" href="#" class="a-imgnone"></a></dd>
  </dl>
  <dl class="a-kerning">
    <dt>Кернинг:</dt>
    <dd><a rel="kernstd" href="#" class="a-kernstd"></a></dd>
		<dd><a rel="kernmid" href="#" class="a-kernmid"></a></dd>
		<dd><a rel="kernbig" href="#" class="a-kernbig"></a></dd>
  </dl>
</div>
<!-- END #access -->


  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    <?php if ($main_menu): ?>
      <a href="#navigation" class="element-invisible element-focusable"><?php print t('Skip to navigation'); ?></a>
    <?php endif; ?>
  </div>

  <header id="header" role="banner" class="clearfix">
	<?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" id="logo">
        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
      </a>
    <?php endif; ?>
    <?php if ($site_name || $site_slogan): ?>
      <hgroup id="site-name-slogan">
        <?php if ($site_name): ?>
          <h1 id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>
        <?php if ($site_slogan): ?>
          <h2 id="site-slogan"><?php print $site_slogan; ?></h2>
        <?php endif; ?>
      </hgroup>
    <?php endif; ?>

    <?php print render($page['header']); ?>

    <?php if ($main_menu || $secondary_menu || !empty($page['navigation'])): ?>
      <nav id="navigation" role="navigation" class="clearfix">
        <?php if (!empty($page['navigation'])): ?> <!--if block in navigation region, override $main_menu and $secondary_menu-->
          <?php print render($page['navigation']); ?>
        <?php endif; ?>
        <?php if (empty($page['navigation'])): ?>
		  <?php print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'id' => 'main-menu',
              'class' => array('links', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
		  <?php print theme('links__system_secondary_menu', array(
            'links' => $secondary_menu,
            'attributes' => array(
              'id' => 'secondary-menu',
              'class' => array('links', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Secondary menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
        <?php endif; ?>
      </nav> <!-- /#navigation -->
    <?php endif; ?>
    <?php if ($breadcrumb): print $breadcrumb; endif;?>
  </header> <!-- /#header -->

  <section id="main" role="main" class="clearfix">
    <?php print $messages; ?>
    <a id="main-content"></a>
    <?php print render($title_prefix); ?>
    <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper clearfix"><?php print render($tabs); ?></div><?php endif; ?>
    <?php print render($page['help']); ?>
    <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
    <?php print render($page['content']); ?>
  </section> <!-- /#main -->
  
  <?php if ($page['sidebar_first']): ?>
    <aside id="sidebar-first" role="complementary" class="sidebar clearfix">
      <?php print render($page['sidebar_first']); ?>
    </aside>  <!-- /#sidebar-first -->
  <?php endif; ?>

  <?php if ($page['sidebar_second']): ?>
    <aside id="sidebar-second" role="complementary" class="sidebar clearfix">
      <?php print render($page['sidebar_second']); ?>
    </aside>  <!-- /#sidebar-second -->
  <?php endif; ?>

  <footer id="footer" role="contentinfo" class="clearfix">
    <?php print render($page['footer']) ?>
    <?php print $feed_icons ?>
  </footer> <!-- /#footer -->

</div> <!-- /#container -->
