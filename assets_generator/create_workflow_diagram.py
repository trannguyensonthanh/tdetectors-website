import graphviz
import os

def create_perfect_system_architecture():
    """
    Tạo sơ đồ kiến trúc hệ thống T-Detectors chi tiết, chuyên nghiệp theo chiều dọc
    với bảng màu hiện đại, chú giải rõ ràng, chất lượng hình ảnh cao và cú pháp hoàn toàn chính xác.
    """
    # --- BẢNG MÀU THIẾT KẾ CHUYÊN NGHIỆP ---
    BG_COLOR = "#F8F9FA"         # Nền trắng xám nhẹ
    FONT_COLOR = "#212529"       # Màu chữ đen đậm
    FONT_NAME = "Arial"          # Font chữ phổ biến, dễ đọc
    BORDER_COLOR = "#ADB5BD"     # Màu viền xám
    
    # Màu sắc chức năng
    PRIMARY_COLOR = "#007BFF"    # Xanh dương chủ đạo cho xử lý chính
    DATA_COLOR = "#17A2B8"       # Xanh ngọc cho dữ liệu
    REID_COLOR = "#6F42C1"       # Tím cho Re-ID
    OPTIMIZE_COLOR = "#28A745"   # Xanh lá cho tối ưu hóa
    DECISION_COLOR = "#FFC107"   # Vàng cho logic quyết định
    OUTPUT_COLOR = "#DC3545"     # Đỏ cho đầu ra/kết quả
    DB_COLOR = "#6C757D"         # Xám cho Database

    # --- KHỞI TẠO ĐỒ THỊ CHÍNH ---
    dot = graphviz.Digraph(
        'TDETECTORS_Perfect_System_Architecture',
        graph_attr={
            'bgcolor': BG_COLOR,
            'rankdir': 'TB',
            'splines': 'ortho',
            'nodesep': '1.0',
            'ranksep': '1.5',
            'label': 'Kiến trúc Hệ thống End-to-End: T-Detectors',
            'fontname': FONT_NAME,
            'fontsize': '32',
            'fontcolor': FONT_COLOR,
            'dpi': '300',
        }
    )

    # --- ĐỊNH NGHĨA STYLE MẶC ĐỊNH ---
    dot.attr('node', 
        style='filled,rounded', 
        shape='box',
        fontname=FONT_NAME, 
        fontsize='14',
        penwidth='1.5'
    )
    dot.attr('edge', 
        fontname=FONT_NAME, 
        fontsize='12',
        penwidth='2.0'
    )

    # ==============================================================================
    # --- CỤM 1: THU THẬP DỮ LIỆU ĐẦU VÀO (DATA INGESTION) ---
    # ==============================================================================
    with dot.subgraph(name='cluster_ingestion') as c:
        c.attr(label='1. Data Ingestion', style='rounded', color=BORDER_COLOR, fontcolor=FONT_COLOR, fontsize='20')
        c.node('input_source', 
               label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0" BGCOLOR="#FFFFFF">
  <TR><TD COLSPAN="2" BGCOLOR="{data_color}"><FONT COLOR="#FFFFFF"><B>Input Sources</B></FONT></TD></TR>
  <TR><TD ALIGN="LEFT" BALIGN="LEFT">▶ Live Camera Streams (RTSP)</TD></TR>
  <TR><TD ALIGN="LEFT" BALIGN="LEFT">▶ Pre-recorded Video Files (MP4, AVI)</TD></TR>
</TABLE>>'''.format(data_color=DATA_COLOR), shape='plain')

    # ==============================================================================
    # --- CỤM 2: PIPELINE XỬ LÝ TRÊN TỪNG CAMERA (INTRA-CAMERA) ---
    # ==============================================================================
    with dot.subgraph(name='cluster_intra_camera') as c:
        c.attr(label='2. Intra-Camera Processing Pipeline', style='rounded', color=BORDER_COLOR, fontcolor=FONT_COLOR, fontsize='20')
        
        c.node('frame_preprocessing',
               label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD BGCOLOR="{primary_color}"><FONT COLOR="#FFFFFF"><B>Frame Pre-processing</B></FONT></TD></TR>
  <TR><TD ALIGN="LEFT">Resize, Normalize, Color Correction</TD></TR>
</TABLE>>'''.format(primary_color=PRIMARY_COLOR), shape='plain')

        c.node('detection_tracking', 
               label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD BGCOLOR="{primary_color}"><FONT COLOR="#FFFFFF"><B>Vehicle Detection &amp; Tracking</B></FONT></TD></TR>
  <TR><TD>
    <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="2">
        <TR><TD ALIGN="LEFT">Detector:</TD><TD ALIGN="LEFT"><B>YOLOv12</B></TD></TR>
        <TR><TD ALIGN="LEFT">Tracker:</TD><TD ALIGN="LEFT"><B>BoT-SORT</B></TD></TR>
    </TABLE>
  </TD></TR>
</TABLE>>'''.format(primary_color=PRIMARY_COLOR), shape='plain')

        c.node('vehicle_data', 
            label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0" BGCOLOR="#E3F2FD">
  <TR><TD COLSPAN="2"><B>Intermediate Vehicle Data</B></TD></TR> <!-- <<<< SỬA LỖI: Đã xóa thẻ </FONT> thừa -->
  <TR><TD ALIGN="LEFT">▪ Cropped Vehicle Image</TD></TR>
  <TR><TD ALIGN="LEFT">▪ Bounding Box (BBox)</TD></TR>
  <TR><TD ALIGN="LEFT">▪ Local Track ID (within camera)</TD></TR>
</TABLE>>''', shape='plain')
        
        with dot.subgraph(name='cluster_parallel_processing') as sp:
            sp.attr(rank='same', style='invis')
            sp.node('lpr_pipeline', 
                label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
    <TR><TD BGCOLOR="{primary_color}"><FONT COLOR="#FFFFFF"><B>License Plate Recognition (LPR)</B></FONT></TD></TR>
    <TR><TD>YOLOv12-nano (Detect) &rarr; CCT (Recognize)</TD></TR>
</TABLE>>'''.format(primary_color=PRIMARY_COLOR), shape='plain')
                
            sp.node('reid_extraction', 
                label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
    <TR><TD BGCOLOR="{reid_color}"><FONT COLOR="#FFFFFF"><B>Re-Identification (Re-ID)</B></FONT></TD></TR>
    <TR><TD>Vision Transformer (ViT) &rarr; 512-dim Vector</TD></TR>
</TABLE>>'''.format(reid_color=REID_COLOR), shape='plain')
    
    dot.node('openvino_engine', 
            label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD BGCOLOR="{opt_color}" COLSPAN="2"><FONT COLOR="#FFFFFF"><B>Intel® OpenVINO™ Optimization</B></FONT></TD></TR>
  <TR><TD ALIGN="LEFT">✓</TD><TD ALIGN="LEFT">Model Conversion (FP16/INT8)</TD></TR>
  <TR><TD ALIGN="LEFT">✓</TD><TD ALIGN="LEFT">Inference Acceleration on CPU/GPU</TD></TR>
  <TR><TD ALIGN="LEFT">✓</TD><TD ALIGN="LEFT">Applied to all AI Models</TD></TR>
</TABLE>>'''.format(opt_color=OPTIMIZE_COLOR), shape='plain')

    # ==============================================================================
    # --- CỤM 3: LIÊN KẾT ĐA CAMERA (MULTI-CAMERA ASSOCIATION) ---
    # ==============================================================================
    with dot.subgraph(name='cluster_multi_camera') as c:
        c.attr(label='3. Multi-Camera Association Logic', style='rounded', color=BORDER_COLOR, fontcolor=FONT_COLOR, fontsize='20')
        
        c.node('feature_aggregation',
               label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0" BGCOLOR="#E3F2FD">
  <TR><TD><B>Aggregated Features</B></TD></TR>
  <TR><TD ALIGN="LEFT">▪ Re-ID Vector</TD></TR>
  <TR><TD ALIGN="LEFT">▪ License Plate String</TD></TR>
  <TR><TD ALIGN="LEFT">▪ Camera ID, Timestamp</TD></TR>
</TABLE>>''', shape='plain')

        c.node('faiss_search', 
            label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
    <TR><TD BGCOLOR="{reid_color}"><FONT COLOR="#FFFFFF"><B>Similarity Search Engine</B></FONT></TD></TR>
    <TR><TD>Faiss Index (IndexFlatL2)</TD></TR>
    <TR><TD>Find Top-K similar vectors</TD></TR>
</TABLE>>'''.format(reid_color=REID_COLOR), shape='plain')

        c.node('global_db', 
            label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
    <TR><TD BGCOLOR="{db_color}" COLSPAN="2"><FONT COLOR="#FFFFFF"><B>Global Vehicle Database</B></FONT></TD></TR>
    <TR><TD>Global ID</TD><TD>Vehicle Info</TD></TR>
    <TR><TD>G_001</TD><TD>{{LP: "51F-12345", Vectors: &#91;…&#93;, History: &#91;…&#93;}}</TD></TR> <!-- <<<< SỬA LỖI: Đã thoát ký tự [ và ] -->
    <TR><TD>G_002</TD><TD>{{LP: "29A-67890", Vectors: &#91;…&#93;, History: &#91;…&#93;}}</TD></TR> <!-- <<<< SỬA LỖI: Đã thoát ký tự [ và ] -->
</TABLE>>'''.format(db_color=DB_COLOR), shape='plain')

        c.node('decision_logic', 
            label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
    <TR><TD BGCOLOR="{decision_color}" BORDER="0"><FONT COLOR="#212529"><B>Decision Logic &amp; ID Assignment</B></FONT></TD></TR>
    <TR><TD>
        <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="4">
            <TR><TD ALIGN="LEFT" VALIGN="TOP">1.</TD><TD ALIGN="LEFT"><B>License Plate Match:</B> Highest Priority.</TD></TR>
            <TR><TD ALIGN="LEFT" VALIGN="TOP">2.</TD><TD ALIGN="LEFT"><B>Vector Similarity:</B> If no LP, match vector (Cosine Sim &gt; Threshold).</TD></TR>
            <TR><TD ALIGN="LEFT" VALIGN="TOP">3.</TD><TD ALIGN="LEFT"><B>New Vehicle:</B> If no match, create new Global ID.</TD></TR>
        </TABLE>
    </TD></TR>
</TABLE>>'''.format(decision_color=DECISION_COLOR), shape='plain')

    # ==============================================================================
    # --- CỤM 4: ĐẦU RA (OUTPUT) ---
    # ==============================================================================
    with dot.subgraph(name='cluster_output') as c:
        c.attr(label='4. System Output', style='rounded', color=BORDER_COLOR, fontcolor=FONT_COLOR, fontsize='20')
        c.node('final_output', 
            label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0">
  <TR><TD COLSPAN="2" BGCOLOR="{output_color}"><FONT COLOR="#FFFFFF"><B>Structured Output Stream</B></FONT></TD></TR>
  <TR><TD ALIGN="LEFT">▶ <B>API Endpoint:</B> Real-time JSON data</TD></TR>
  <TR><TD ALIGN="LEFT">▶ <B>Message Queue:</B> Kafka / RabbitMQ</TD></TR>
  <TR><TD ALIGN="LEFT">▶ <B>Dashboard:</B> Visualization &amp; Analytics</TD></TR>
  <TR><TD ALIGN="LEFT">
    <I>Data: {{Global ID, License Plate, Camera ID, Timestamp, BBox}}</I>
  </TD></TR>
</TABLE>>'''.format(output_color=OUTPUT_COLOR), shape='plain')
        
    # ==============================================================================
    # --- CHÚ GIẢI (LEGEND) ---
    # ==============================================================================
    with dot.subgraph(name='cluster_legend') as c:
        c.attr(label='Legend', style='rounded', color=BORDER_COLOR, fontcolor=FONT_COLOR, fontsize='20')
        c.node('legend',
               label='''<
<TABLE BORDER="0" CELLBORDER="1" CELLSPACING="5" BGCOLOR="white">
    <TR><TD BGCOLOR="{primary_color}" WIDTH="30"></TD><TD ALIGN="LEFT">Core Processing</TD></TR>
    <TR><TD BGCOLOR="{data_color}" WIDTH="30"></TD><TD ALIGN="LEFT">Data Input</TD></TR>
    <TR><TD BGCOLOR="{reid_color}" WIDTH="30"></TD><TD ALIGN="LEFT">Re-ID &amp; Similarity</TD></TR>
    <TR><TD BGCOLOR="{opt_color}" WIDTH="30"></TD><TD ALIGN="LEFT">Performance Optimization</TD></TR>
    <TR><TD BGCOLOR="{decision_color}" WIDTH="30"></TD><TD ALIGN="LEFT">Decision Logic</TD></TR>
    <TR><TD BGCOLOR="{output_color}" WIDTH="30"></TD><TD ALIGN="LEFT">System Output</TD></TR>
    <TR><TD BGCOLOR="{db_color}" WIDTH="30"></TD><TD ALIGN="LEFT">Database / Storage</TD></TR>
</TABLE>
'''.format(primary_color=PRIMARY_COLOR, data_color=DATA_COLOR, reid_color=REID_COLOR,
           opt_color=OPTIMIZE_COLOR, decision_color=DECISION_COLOR, output_color=OUTPUT_COLOR, db_color=DB_COLOR),
               shape='plain')

    # ==============================================================================
    # --- ĐỊNH NGHĨA CÁC KẾT NỐI (EDGES) ---
    # ==============================================================================
    dot.edge('input_source', 'frame_preprocessing', label='Raw Video Frames')
    dot.edge('frame_preprocessing', 'detection_tracking', label='Processed Frames')
    dot.edge('detection_tracking', 'vehicle_data', label='Bounding Box + Local Track ID')
    dot.edge('vehicle_data', 'lpr_pipeline', label='Cropped Vehicle Image')
    dot.edge('vehicle_data', 'reid_extraction', label='Cropped Vehicle Image')
    dot.edge('lpr_pipeline', 'feature_aggregation', label='License Plate String')
    dot.edge('reid_extraction', 'feature_aggregation', label='Feature Vector')
    dot.edge('feature_aggregation', 'decision_logic', label='Query Features')
    dot.edge('decision_logic', 'faiss_search', label='Vector Search Request')
    dot.edge('faiss_search', 'decision_logic', label='Top-K Similar Candidates')
    dot.edge('global_db', 'faiss_search', style='dashed', dir='both', label='Load/Update Index')
    dot.edge('decision_logic', 'global_db', style='dashed', dir='both', label='Query/Update Vehicle Record')
    dot.edge('decision_logic', 'final_output', label='Finalized Vehicle Record')
    dot.edge('openvino_engine', 'detection_tracking', style='dashed', color=OPTIMIZE_COLOR, constraint='false', label='Accelerates')
    dot.edge('openvino_engine', 'lpr_pipeline', style='dashed', color=OPTIMIZE_COLOR, constraint='false')
    dot.edge('openvino_engine', 'reid_extraction', style='dashed', color=OPTIMIZE_COLOR, constraint='false')

    # --- XUẤT FILE ---
    output_filename = 'TDetectors_Perfect_System_Architecture'
    # Sử dụng raw string (r"...") để đường dẫn an toàn hơn trên Windows
    output_directory = r'D:\Lap_Trinh_ST\web\Dự_án_NCKH\thongtinsanpham\t-detectors-vision\public\images'
    os.makedirs(output_directory, exist_ok=True)
    output_path = os.path.join(output_directory, output_filename)
    
    try:
        dot.render(output_path, format='png', cleanup=True, engine='dot')
        print(f"\n✅ Thành công! Sơ đồ kiến trúc đã được tạo tại: '{os.path.abspath(output_path)}.png'")
    except graphviz.backend.execute.CalledProcessError as e:
        print("\n❌ Lỗi: Không thể thực thi lệnh 'dot' của Graphviz.")
        print(f"   Chi tiết lỗi từ Graphviz: {e}")
        print("   Vui lòng đảm bảo rằng bạn đã cài đặt phần mềm Graphviz và đã thêm thư mục 'bin' của nó vào biến môi trường PATH của hệ thống.")
    except Exception as e:
        print(f"\n❌ Đã xảy ra lỗi không xác định: {e}")

if __name__ == "__main__":
    create_perfect_system_architecture()