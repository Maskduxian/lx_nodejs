module.exports={
    root:process.cwd(),
    hostname:'192.168.1.5',
    port:9227,
    compress:/\.(html|js|css|md)/,
    cache:{
      maxAge:600,
      xpires:true,
      cacheControl:true,
      lastModified:true,
      etag:true
    }
};
