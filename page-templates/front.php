<?php
/*
Template Name: Front
*/
get_header(); ?>



<?php while ( have_posts() ) : the_post(); ?>
<?php
	$a_hero_args = ['hero_title' => get_the_title()];
	uni_partial('library/uni-partials/component-hero', $a_hero_args); 
	uni_partial('library/uni-partials/sections/product-section');
	uni_partial('library/uni-partials/component-zen');
	?>
<?php endwhile; ?>






<?php get_footer();
