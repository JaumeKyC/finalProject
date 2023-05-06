
import { Component, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

export class StatsComponent {
  @ViewChild('myDivElement') myDivElementRef!: ElementRef;
  @ViewChild('canvasId') canvasElement!: ElementRef;

  public scene: THREE.Scene;
  public file: string = '../../assets/stl/bitcoin_coin_flowalistik.stl';
  public geometryTest = new THREE.SphereGeometry();
  public material!: THREE.Material;
  public mesh!: THREE.Mesh;
  public camera: THREE.PerspectiveCamera;
  public renderer!: THREE.WebGLRenderer;
  public mainLight: THREE.DirectionalLight;
  public ambientLight: THREE.AmbientLight;
  public detailLight: THREE.PointLight;
  public controls!: OrbitControls;

  constructor() {
    this.scene = new THREE.Scene();

     // Use STLLoader to load the local STL file
    const loader = new STLLoader();
    loader.load(this.file, (geometry) => {
      this.material = new THREE.MeshStandardMaterial({
        color: "#FFD310",
      });

      this.mesh = new THREE.Mesh(geometry, this.material);
      this.scene.add(this.mesh);
    });

    //LIGHT
    this.mainLight = new THREE.DirectionalLight(0xffffff, 1);
    this.mainLight.position.set(0, 0, 100);
    this.scene.add(this.mainLight);

    this.ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(this.ambientLight);

    this.detailLight = new THREE.PointLight(0xffffff, 0.5);
    this.detailLight.position.set(0, 50, 50);
    this.scene.add(this.detailLight);

    //CAMERA
    this.camera = new THREE.PerspectiveCamera();
    this.camera.position.z = 0;
     
  }

  //RENDERER

  ngAfterViewInit() {
    if (this.canvasElement) {
      this.camera = new THREE.PerspectiveCamera(45, this.myDivElementRef.nativeElement.offsetWidth / this.myDivElementRef.nativeElement.offsetHeight, 0.1, 300);
      this.camera.position.z = 60;
      this.scene.add(this.camera);
      this.canvasElement.nativeElement.width = this.myDivElementRef.nativeElement.offsetWidth;
      this.canvasElement.nativeElement.height = this.myDivElementRef.nativeElement.offsetHeight;
      //SIZES
      this.camera.aspect = this.myDivElementRef.nativeElement.offsetWidth / this.myDivElementRef.nativeElement.offsetHeight;
      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasElement.nativeElement, alpha: true  });
      this.renderer.setSize(this.myDivElementRef.nativeElement.offsetWidth, this.myDivElementRef.nativeElement.offsetHeight);
      this.renderer.render(this.scene, this.camera);
      // ORBIT CONTROLS
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.enableZoom = false;
      this.controls.dampingFactor = 0.10;
      this.controls.enablePan = false;
      this.controls.rotateSpeed = 1;


      window.addEventListener('resize', () => {
        this.canvasElement.nativeElement.width = this.myDivElementRef.nativeElement.offsetWidth;
        this.canvasElement.nativeElement.height = this.myDivElementRef.nativeElement.offsetHeight;
        this.camera.aspect = this.myDivElementRef.nativeElement.offsetWidth / this.myDivElementRef.nativeElement.offsetHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.myDivElementRef.nativeElement.offsetWidth, this.myDivElementRef.nativeElement.offsetHeight);

      })

      const loop = () => {
        if (this.mesh) {
          this.mesh.rotateY(0.01);
        }
          this.renderer.render(this.scene, this.camera);
          window.requestAnimationFrame(loop)
      }
      loop();
    }
  }
}
