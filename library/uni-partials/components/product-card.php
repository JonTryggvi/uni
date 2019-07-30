<?php 
$product_title = $product->get_name();
$product_img_url = get_the_post_thumbnail_url($product_id) ? get_the_post_thumbnail_url($product_id) : ''; # get_field('missing_image', 'option');
$product_text = wp_trim_words($product->get_description(), 20, ' ...');
?>
 <a class="cell medium-4" href="<?php echo get_the_permalink($product_id); ?>">
<article >
  <header>
   
    <figure>
      <img src="<?php echo $product_img_url; ?>" alt="">
    </figure>
  </header>
  <main>
      <h2><?php echo $product_title; ?></h2>
      <p><?php echo $product_text; ?></p>
    </main>
    
  </article>
</a>

