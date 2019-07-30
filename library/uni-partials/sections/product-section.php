<section class="uni_section">
  <div class="card-container ">
    
      
      <?php
        $query = new WC_Product_Query( array(
          'limit' => 3,
          'orderby' => 'date',
          'order' => 'DESC',
          'return' => 'ids',
        ) );
        $products = $query->get_products(); 
        foreach ($products as $key => $product_id) {
          $product = wc_get_product($product_id);
          uni_partial('library/uni-partials/components/product-card', [
            'product' => $product,
            'product_id' => $product_id
          ]);
        }
      
      ?>
    
   
  </div>
</section>